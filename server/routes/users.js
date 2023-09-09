const express = require('express')

const user = require('../models/usermodel')

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
router.post('/', async (req, res)  => {
    const { name, mobile, genid } = req.body

    // helps in catching errors
    try{
        const yuser = await user.create({name, mobile, genid})
        res.status(200).json({yuser})
    } catch (error){
        res.status(400).json({error : error.message})
    }
})


module.exports = router