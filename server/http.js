// Import required modules
require('dotenv').config()

const express = require('express');
const userRoutes = require('./routes/users')
// const mongoose = require('mongoose');
//const bodyParser = require('body-parser');
//const bcrypt = require('bcrypt');

// Create an Express application
const app = express();

//middleware
app.use((error, req, res, next) => {
  if (error instanceof SyntaxError) {
    // Handle JSON parsing error
    return res.status(400).json({ error: 'Invalid JSON' });
  }
  next();
});

app.use((req, res, next) => {
  console.log(req.path, req.method)
  next()
})

//routes
app.use('/api/users', userRoutes)

//listening for requests
app.listen(process.env.PORT , () => {
  console.log('listening to port', process.env.PORT )
})
