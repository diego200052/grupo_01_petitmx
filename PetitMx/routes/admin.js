const express = require('express');
const router = express.Router();
const multer = require('multer');
const path = require('path');

// ************ Controller Require ************
const adminController = require('../controllers/adminController');

/*** GET ALL PRODUCTS ***/

/*** CREATE ONE PRODUCT ***/
router.get('/addProduct', adminController.addProduct);

/*** EDIT ONE PRODUCT ***/
router.get('/editProduct', adminController.editProduct);

/*** DELETE ONE PRODUCT***/
router.delete('/:id', adminController.destroyProduct);


module.exports = router;