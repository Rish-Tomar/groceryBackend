const Customer =require('../../../models/customerDetails')



module.exports.createCustomer = async (req,res)=>{
    console.log('values recieved as post requests are',req.body)

    //find if customer already exists using email_id
    const customerExists = await Customer.findOne({email:req.body.email})
    if(customerExists){
        return res.status(400).json({
            error:'customer already exists with the provided email id'
        })
    }

    //if customer donot exists in the database then create one
    const createNew = await Customer.create(req.body);
    if(createNew){
        return res.status(201).json({
            message:'New Customer Created',
            
        })
    }
    console.log('createnew',createNew)
    return res.status(500).json({
        error:'internal server error'
    })

}

module.exports.fetchCustomers = async (req,res)=>{
    console.log('inside fetch customers');
    const customerData =await Customer.find();

    if(customerData){
        return res.status(200).json({
            message:'request successful',
            data:customerData
        })
    }
    return res.status(400).json({
        message:'no customer Found'
    })
}

module.exports.fetchSpecificCustomersOrders = async (req,res)=>{
    console.log(req.params.customer_id);
    //search the customer
    const customerData =await Customer
                                 .findOne({email:req.params.customer_id})
                                 .populate('orders');

    console.log('custmr data', customerData)
    if(customerData){
        return res.status(200).json({
            message:'User found',
            data:{
                name:customerData.name,
                email:customerData.email,
                orders:customerData.orders
            }
        })
    }
    
    return res.status(400).json({
        message:'No user found'
    })
    
}

module.exports.maxOrdersCustomer =async (req,res) =>{
    console.log('no params as of now');

    const result = await Customer.find().populate('orders');
    const ress = result.map(element=>{
        return(element.orders.length)
    })

    const maxinlist=Math.max(...ress)
    const nmn=result.find((elem)=>{
        return elem.orders.length==maxinlist
    })
    
    console.log('here ',nmn)
    return res.status(200).json({
        message:'action performed',
        data:{
            name:nmn.name,
            email:nmn.email,
            orderCount:maxinlist
        }
    })
    
}