const mongoose = require('mongoose')

const customerSchema = new mongoose.Schema({
    name:{
        type:String
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    phone:{
        type:Number
    }
})

const Customer = mongoose.model('Customer',customerSchema)

module.exports = Customer