const express =require('express')
const Router = express.Router()
const productApiController = require('../../controller/api/v1/product')

Router.post('/create-product',productApiController.addProduct)
Router.post('/update-price/:product_id',productApiController.updateProductPrice)

module.exports = Router