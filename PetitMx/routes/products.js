const express = require('express');
const router = express.Router();

// ************ Controller Require ************
const productsController = require('../controllers/productsController');

router.get('/', productsController.products);
router.get('/productCart', productsController.productCart);
router.get('/productDetail/:id', productsController.productDetail);

module.exports = router;