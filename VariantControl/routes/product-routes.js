const express = require('express');

//fetching all functions for routes
const {
    handleToCreatenewShirtProduct,
    handleTocCreatenwPantProduct,
    handleTocCreateShoeProduct,
    getShirtProductDetailsById,
    getPantProductDetailsById,
    getShoeProductDetailsById,
    getallproducts,
    getShirtProducts,
    getShoeProducts,
    getPantProducts
} = require('../controllers/product-controller');

const router = express.Router();

//create new products for shirts , pants and shoes
router
    .post('/shirts',handleToCreatenewShirtProduct)
    .post('/pants',handleTocCreatenwPantProduct)
    .post('/shoes',handleTocCreateShoeProduct);


//each products details
router
    .get('/shirts',getShirtProducts)
    .get('/shoes',getShoeProducts)
    .get('pants',getPantProducts)

//get product details by id
router
    .get('/shirts/:productid',getShirtProductDetailsById)
    .get('/pants/:productid',getPantProductDetailsById)
    .get('/shoes/:productid',getShoeProductDetailsById);

//Router that takes all data
router
    .get('/',getallproducts);

module.exports = router;
