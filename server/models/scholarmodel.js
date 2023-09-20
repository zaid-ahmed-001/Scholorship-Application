const mongoose = require('mongoose')

const Schema = mongoose.Schema

const ScholarSchema = new Schema({
    Name :{
        type : String,
        required : true
    },
    Deadline :{
        type : String,
        required : true
    },
    Description :{
        type : String,
        required : true
    },
    Eligibility :{
        type : String,
        required : true
    },
    Doc_req :{
        type : String,
        required : true
    }
}, { timestamps: true})

module.exports = mongoose.model('Scholarship', ScholarSchema)