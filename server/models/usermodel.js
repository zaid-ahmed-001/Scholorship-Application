const mongoose = require('mongoose')

const Schema = mongoose.Schema

const UserSchema = new Schema({
    name :{
        type : String,
        required : true
    },
    mobile :{
        type : Number,
        required : true
    },
    genid :{
        type : Number,
        required : true
    }
}, { timestamps: true})

module.exports = mongoose.model('userdb', UserSchema)