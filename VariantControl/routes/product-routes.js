const express = require('express');

//fetching all functions for routes
const {
    handleToCreatenewShirtProduct,
    handleTocCreatenwPantProduct,
    handleTocCreateShoeProduct,
    getShirtProductDetailsById,
    getPantProductDetailsById,
    getShoeProductDetailsById,
    getallproducts
} = require('../controllers/product-controller');

const router = express.Router();

//create new products for shirts , pants and shoes
router
    .post('/shirts',handleToCreatenewShirtProduct)
    .post('/pants',handleTocCreatenwPantProduct)
    .post('/shoes',handleTocCreateShoeProduct);

//get product details by id
router
    .get('/shirts/:productid',getShirtProductDetailsById)
    .get('/pants/:productid',getPantProductDetailsById)
    .get('/shoes/:productid',getShoeProductDetailsById);

//Router that takes all data
router
    .get('/',getallproducts);

module.exports = router;
