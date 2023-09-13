const user = require('../models/usermodel')
const mongoose = require('mongoose')

// GET all users
const getusers = async (req, res) => {
    const people = await user.find({}).sort({createdAt : -1})
    res.status(200).json(people)
}

//GET a single user
const getuser = async (req, res) => {
    const { id } = req.params

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error : 'NO SUCH DATA'})
    }
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

const deleteuser = async (req, res) => {
    const { id } = req.params

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error : 'NO SUCH DATA'})
    }
const deluser = await user.findOneAndDelete({_id: id})

if(!deluser) {
    return res.status(400).json({error :'No such user!!!'})
}
res.status(200).json(deluser)
}


//update a user

const updatuser = async (req, res) => {
    const { id } = req.params

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error : 'NO SUCH DATA'})
    }
    const upuser = await user.findOneAndUpdate({_id: id}, {
        ...req.body
    })
    if(!deluser) {
        return res.status(400).json({error :'No such user!!!'})
    }
    req.status(200).json(upuser)
}

module.exports = {
    CreateUser,
    getuser,
    getusers,
    deleteuser,
    updatuser
}