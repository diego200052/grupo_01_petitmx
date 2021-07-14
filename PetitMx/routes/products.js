const express = require('express');
const router = express.Router();

// ************ Controller Require ************
const productsController = require('../controllers/productsController');

router.get('/productCart', productsController.productCart);
router.get('/productDetail', productsController.productDetail);

module.exports = router;