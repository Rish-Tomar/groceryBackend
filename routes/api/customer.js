const express =require('express')
const Router = express.Router()
const customerApiController = require('../../controller/api/v1/customer')

Router.post('/create-customer',customerApiController.createCustomer) //we recieve data as post request here(name,email,phone)

module.exports = Router