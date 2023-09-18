const mongoose = require('mongoose')

const Schema = mongoose.Schema

const UserSchema = new Schema({
    name :{
        type : String,
        required : true
    },
    Enroll_no :{
        type : String,
        required : true
    },
    mobile :{
        type : Number,
        required : true
    },
    Email :{
        type : String,
        required : true
    }
}, { timestamps: true})

module.exports = mongoose.model('users', UserSchema)