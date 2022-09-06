const mongoose = require('mongoose')

const orderSchema = new mongoose.Schema({
    producctList:[
        {
           type:mongoose.Schema.Types.ObjectId 
        }
    ],
    totalPrice:{
        type:Number
    },
    paymentInfo:{
        paymentType:{
            type:String
        }
    }
})

const OrderDetails =mongoose.model('orderDetails',orderSchema)

module.exports = OrderDetails