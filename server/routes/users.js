const express = require('express')
const {
    CreateUser
} = require('../controllers/userconroller')


const router = express.Router()

//get all users 
router.get('/',(req, res) => {
    res.json({mssg: 'GET all user'})
} )

//get a single user
router.get('/:id',(req, res) => {
    res.json({mssg: 'GET a single user'})
} )

//post a user which gives fully functional json as an output
router.post('/', CreateUser)

//delete a user
router.delete('/:id',(req, res)  => {
    res.json({mssg:'DELETE a user details'})
})

//update a user detail
router.patch('/:id',(req, res)  => {
    res.json({mssg:'UPDATE a user details'})
})

module.exports = router