const Orders = require('../../../models/customerOrder')


module.exports.orderCreate = async (req,res)=>{
    //recieve customer id as post data and user for the order recieved as params under  email and 
    console.log('req.body',req.body);
    const createorder = await Orders.create({
        producctList:req.body.productItems,
        totalPrice:45,
        paymentInfo:'credit Card',
        customer: req.params._id

    })

}
