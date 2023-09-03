// Import required modules
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt');

// Create an Express application
const app = express();

// Connect to MongoDB (Make sure MongoDB is running)
mongoose.connect('mongodb://localhost:27017/User', { useNewUrlParser: true, useUnifiedTopology: true });

// Define a User schema
const UserSchema = new mongoose.Schema({
  username: String,
  password: String,
});

const User = mongoose.model('User', UserSchema);

// Middleware to parse JSON in requests
app.use(bodyParser.json());

// POST route to handle user sign-in
app.post('/', async (req, res) => {
  const { username, password } = req.body;

  // Check if the user exists in the database
  const user = await User.findOne({ username });

  if (!user) {
    return res.status(404).json({ message: 'User not found' });
  }

  // Compare the provided password with the stored hashed password
  const passwordMatch = await bcrypt.compare(password, user.password);

  if (!passwordMatch) {
    return res.status(401).json({ message: 'Incorrect password' });
  }

  // If the password matches, you can consider the user authenticated.
  // You may generate a JWT token and return it here for further authentication.

  res.status(200).json({ message: 'Sign-in successful' });
});

// Start the server
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
