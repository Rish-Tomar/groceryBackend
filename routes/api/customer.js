const express =require('express')
const Router = express.Router()
const customerApiController = require('../../controller/api/v1/customer')

Router.post('/create-customer',customerApiController.createCustomer) //we recieve data as post request here(name,email,phone)
Router.get('/fetch-customers',customerApiController.fetchCustomers)  //for fetching all customers data
Router.get('/fetch-customer/:customer_id',customerApiController.fetchSpecificCustomersOrders)
Router.get('/fetchMax',customerApiController.maxOrdersCustomer)
module.exports = Router