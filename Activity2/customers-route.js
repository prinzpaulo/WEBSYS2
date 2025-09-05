const express = require('express');
const router = express.Router();
const controller = require('./customer-controller');

// routes
router.get('/', controller.getAllCustomers);
router.get('/id', controller.getById);
router.get('/firstname', controller.getByFirstName);
router.get('/lastname', controller.getByLastName);
router.get('/email', controller.getByEmail);
router.get('/gender', controller.getByGender);
router.get('/created', controller.getByCreatedAt);
router.get('/birthday', controller.getByBirthday);

module.exports = router;