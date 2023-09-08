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

//post a user
router.post('/',(req, res)  => {
    res.json({mssg:'POST a new user details'})
})

//delete a user
router.delete('/:id',(req, res)  => {
    res.json({mssg:'DELETE a user details'})
})

//update a user detail
router.patch('/:id',(req, res)  => {
    res.json({mssg:'UPDATE a user details'})
})

module.exports= router