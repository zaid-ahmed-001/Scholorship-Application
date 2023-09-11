const user = require('../models/usermodel')

// GET all users
const getusers = async (req, res) => {
    const people = await user.find({}).sort({createdAt : -1})
    res.status(200).json(people)
}

//GET a single user
const getuser = async (req, res) => {
    const { id } = req.params
    const person = await user.findById(id)

    if(!person) {
        return res.status(404).json({error :'No such user!!!'})
    }
res.status(200).json(person)
    
}

// Create a new user
const CreateUser = async (req, res) => {
    const { name, mobile, Email } = req.body

    // add doc to db
    try{
        const yuser = await user.create({name, mobile, Email})
        res.status(200).json({yuser})
    } catch (error){
        res.status(400).json({error : error.message})
    }
}

//delete a user


//update a user

module.exports = {
    CreateUser,
    getuser,
    getusers
}