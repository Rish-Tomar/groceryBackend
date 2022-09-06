const express =require('express')
const Router = express.Router()

Router.use('/customer',require('./customer'))

module.exports =Router