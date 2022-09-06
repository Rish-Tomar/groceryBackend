const mongoose = require('mongoose')

const productSchema = new mongoose.Schema({
    category:{
        type:String
    },
    information:{
        type:String
    },
    price:{
        type:Number
    },
    quantity:{
        type:Number
    },
    productId:{
        type:String,
        unique:true,
        required:true
    }
    
})

const Product =mongoose.model('Product',productSchema)

module.exports = Product