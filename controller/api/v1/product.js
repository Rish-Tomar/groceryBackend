const Product = require('../../../models/product')

module.exports.addProduct = async (req,res)=>{
    //recieving a post request

    try{
        const existingproduct = await Product.findOne({productId:req.body.productId});

    if(existingproduct){
        return res.status(400).json({
            message:'this product already exists in the databse. Cannot add product'
        })
    }

    const createProduct =await Product.create(req.body);

    if(createProduct){
        return res.status(201).json({
            message:'New Product created',
            product:{
                information:createProduct.information
            }
        })
    }
    }
    catch(err){
        if(err){
            return res.status(500).json({
                eerror_message:'error!! check your key values under body section and ensure you are sending POST request '
            })
        }
    }

   

}

module.exports.updateProductPrice =async (req,res)=>{

    //product id recieved as the params and new price in post body
    console.log('params',req.params);
    
    const fetchedProduct = await Product.findOneAndUpdate({productId:req.params.product_id},{price:parseInt(req.body.price)});
    console.log('result',fetchedProduct)
    if(fetchedProduct){
        return res.status(200).json({
            message:'price of the product Updated'
        })
    }

    return res.status(404).json({
        message:'The product was not found or the price was not updated'
    })
}