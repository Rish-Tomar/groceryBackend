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
    },
    orders:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:'orderDetails'
        }
    ]
})

const Customer = mongoose.model('Customer',customerSchema)

module.exports = Customer