const Product = require('../../../models/product')

module.exports.addProduct = async (req,res)=>{
    //recieving a post request

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

    return res.status(500).json({
        message:'New product was not created'
    })

}

module.exports.updateProductPrice =async (req,res)=>{

    //product id recieved as the params and new price in post body
    const fetchedProduct = await Product.findOneAndUpdate({productId:req.params.product_id},{price:req.body.price});
    if(fetchedProduct){
        return res.status(200).json({
            message:'price of the product Updated'
        })
    }

    return res.status(404).json({
        message:'The product was not found or the price was not updated'
    })
}