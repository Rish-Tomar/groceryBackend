/* imports and important variables */

const express = require('express')
const PORT    = process.env.PORT || 8000 
const db      = require('./config/mongoose')

const app = express();

/* MIDDLEWARES */    
    app.use(express.urlencoded({ extended: false}))  //important to use for reading data sent using POST(xxx-url-encoded) request
    
    //using view engine
    app.set('view engine', 'ejs');
    app.set('views', './views');
    
    //using routes
    app.use('/',require('./routes'))

/* server listening */
app.listen(PORT,(err) =>{
    if(err){
        console.log('ERROR', err)
    }
    else{
        console.log('Server is running at port number',PORT)
    }
})