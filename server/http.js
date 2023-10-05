const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const cors = require('cors')
const multer = require('multer')

dotenv.config();

const app = express();
const port = process.env.PORT || 4000;

app.use(cors())


// Middleware to parse JSON request bodies
app.use(bodyParser.json());

// MongoDB connection
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB');
});

// Import and use the userRoutes
const userRoutes = require('./routes/users');
app.use('/api/users', userRoutes);

// Import and use the ScholarRoutes
const ScholarRoutes = require('./routes/scholar');
app.use('/api/Scholar', ScholarRoutes);

// Centralized error handling middleware
app.use((err, req, res, next) => {
  console.error('Error:', err);
  res.status(500).json({ error: 'Internal server error' });
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
