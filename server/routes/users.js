const express = require('express')

const router = express.Router()

//get all users 
router.get('/',(req, res) => {
    res.json({mssg: 'GET all user'})
} )

//get a single user
router.get('/:id',(req, res) => {
    res.json({mssg: 'GET a single user'})
} )

module.exports= router