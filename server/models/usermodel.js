const mongoose = require('mongoose')

const Schema = mongoose.Schema

const UserSchema = new Schema({
    FirstName :{
        type : String,
        required : true
    },   
    LastName :{
        type : String,
        required : true
    },   
    FatherName :{
        type : String,
        required : true
    }, 
    PassWord :{
        type : String,
        required : true
    },
    ConfirmWord :{
        type : String,
        required : true
    },
    email :{
        type : String,
        required : true
    },
    ContactNumber :{
        type : String,
        required : true
    },
    DateofBirth :{
        type : String,
        required : true
    },
    Enrollno :{
        type : String,
        required : true
    },
    Gender :{
        type : String,
        required : true
    },
    Religion :{
        type : String,
        required : true
    },
    MaritalStatus :{
        type : String,
        required : true
    },
    SpouseName :{
        type : String,
        required : true
    },
    Disabled :{
        type : String,
        required : true
    },
    Orphan :{
        type : String,
        required : true
    },
    Agreement :{
        type : String,
        required : true
    },
    Diploma :{
        type : String,
        required : true
    }
}, { timestamps: true})

module.exports = mongoose.model('users', UserSchema)