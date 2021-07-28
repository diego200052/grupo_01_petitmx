const express = require('express');
const router = express.Router();
const multer = require('multer');
const path = require('path');

var storage = multer.diskStorage({
	destination: function (req, file, cb) {
		cb(null, path.join(__dirname, '../public/img/productos'))
	},
	filename: function (req, file, cb) {
		cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname))
	}
});

var upload = multer({ storage: storage });

// ************ Controller Require ************
const adminController = require('../controllers/adminController');

/*** GET ALL PRODUCTS ***/

/*** CREATE ONE PRODUCT ***/
router.get('/addProduct', adminController.addProduct);

router.post('/addProduct', upload.single('image'), adminController.storeProduct);

/*** EDIT ONE PRODUCT ***/
router.get('/editProduct/:id', adminController.editProduct);

router.post('/editProduct/:id', upload.single('image'), adminController.updateProduct);

/*** DELETE ONE PRODUCT***/
router.delete('/deleteProduct/:id', adminController.destroyProduct);


module.exports = router;