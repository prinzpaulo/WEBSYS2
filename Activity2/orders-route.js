const express = require('express');
const router = express.Router();
const controller = require('./orders-controller');
//routes
router.get('/', controller.getAllOrders);
router.get('/id', controller.getById);
router.get('/date', controller.getByDate);
router.get('/status', controller.getByStatus);
router.get('/totalamount', controller.getByTotalAmount);
router.get('/totalamountrange', controller.getByTotalAmountRange);

module.exports = router;