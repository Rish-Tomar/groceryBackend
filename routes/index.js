const express =require('express')
const { home } = require('../controller/homeController')
const Router = express.Router()

Router.get('/',home)
Router.use('/api',require('./api'))

module.exports = Router