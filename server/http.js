require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT || 4000;

// Middleware to parse JSON request bodies
app.use(bodyParser.json());

// Connect to MongoDB Atlas using the provided URI
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => {
    console.log('Connected to MongoDB');

    // Define the user schema and model
    const userSchema = new mongoose.Schema({
      name: String,
      mobile: String,
      Email: String,
    });

    const User = mongoose.model('User', userSchema);

    // POST route to create a new user
    app.post('/api/users', async (req, res) => {
      try {
        // Destructure properties from req.body
        const { name, mobile, Email } = req.body;

        // Check if required fields are present
        if (!name || !mobile || !Email) {
          return res.status(400).json({ error: 'Missing required fields' });
        }

        // Create a new user
        const newUser = new User({ name, mobile, Email });

        // Save the user to the database
        await newUser.save();

        res.status(201).json({ message: 'User created successfully', user: newUser });
      } catch (error) {
        console.error('Error creating user:', error);
        res.status(500).json({ error: 'Internal server error' });
      }
    });

    // GET route to retrieve all users
    app.get('/api/users', async (req, res) => {
      try {
        // Retrieve all users from the database
        const users = await User.find();
        res.status(200).json(users);
      } catch (error) {
        console.error('Error retrieving users:', error);
        res.status(500).json({ error: 'Internal server error' });
      }
    });

    // Start the server once the database connection is established
    app.listen(port, () => {
      console.log(`Server is running on port ${port}`);
    });
  })
  .catch((error) => {
    console.error('Error connecting to MongoDB:', error);
  });

// Handle unhandled promise rejections (for MongoDB connection)
process.on('unhandledRejection', (error) => {
  console.error('Unhandled Promise Rejection:', error);
});

// Handle uncaught exceptions
process.on('uncaughtException', (error) => {
  console.error('Uncaught Exception:', error);
  process.exit(1); // Exit the process to prevent further issues
});
