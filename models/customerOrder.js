const mongoose = require('mongoose')

const orderSchema = new mongoose.Schema({
    producctList:[
        {
           type:mongoose.Schema.Types.ObjectId,
           ref:'Product' 
        }
    ],
    totalPrice:{
        type:Number
    },
    paymentInfo:{
        paymentType:{
            type:String
        }
    },
    customer:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Customer'
    }
})

const OrderDetails =mongoose.model('orderDetails',orderSchema)

module.exports = OrderDetails