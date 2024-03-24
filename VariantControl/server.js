const express = require('express');
const productrouter = require('./routes/product-routes')

const app = express();

//json parsering
app.use(express.json());
app.use(express.urlencoded({extended: false}));

//Connecting to MongoDB
const {connectoMongoDB} = require('./db');
connectoMongoDB('mongodb://localhost:27017/products');

//Using Routes middleware to navigate
app.use('/products/',productrouter);

//Server Setup for running in local machine
const PORT = 2230
app.listen(PORT,()=>{
    console.log("Congrats you started your dev server!");
    console.log(`You can reach your server at http://localhost:${PORT}/`)
})