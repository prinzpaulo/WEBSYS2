const express = require('express');
const router = express.Router();
const controller = require('./products-controller');

router.get('/', controller.getAllProducts);
router.get('/name', controller.getByName);
router.get('/description', controller.getByDescription);
router.get('/pricerange', controller.getByPriceRange);
router.get('/stockrange', controller.getByStockRange);
router.get('/id', controller.getById);
router.get('/category', controller.getByCategory);

module.exports = router;
