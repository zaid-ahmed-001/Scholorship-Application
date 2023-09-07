// Import required modules
require('dotenv').config()

const express = require('express');
// const mongoose = require('mongoose');
//const bodyParser = require('body-parser');
//const bcrypt = require('bcrypt');

// Create an Express application
const app = express();

//middleware
app.use((req, res, next) => {
  console.log(req.path, req.method)
  next()
})

//routes
app.get('/', (req, res) => {
  res.json({username: 'New user'})
})

//listening for requests
app.listen(process.env.PORT , () => {
  console.log('listening to port', process.env.PORT )
})
