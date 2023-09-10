const user = require('../models/usermodel')

// GET all users


//GET a single user


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
    CreateUser
}