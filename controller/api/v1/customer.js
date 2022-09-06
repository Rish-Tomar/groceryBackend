const Customer =require('../../../models/customerDetails')

module.exports.showAllDetails = async (req,res)=>{

    console.log('this is showDetails consolelog')
    const customers = Customer.find();
    console.log('all details', customers)
}

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

