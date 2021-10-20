const express = require('express');
const router = express.Router();
const apiController = require('../controllers/apiController');

router.get('/users', apiController.getUsers);
router.get('/users/:id', apiController.getUser);

router.get('/products', apiController.getProducts);
router.get('/products/:id', apiController.getProduct);


module.exports = router;