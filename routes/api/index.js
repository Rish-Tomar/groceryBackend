const express =require('express')
const Router = express.Router()

Router.use('/customer',require('./customer'))
Router.use('/product',require('./product'))
module.exports =Router