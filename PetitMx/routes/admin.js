const express = require('express');
const router = express.Router();
const multer = require('multer');
const path = require('path');
let { check, validationResult, body } = require('express-validator');

var storage = multer.diskStorage({
	destination: function (req, file, cb) {
		cb(null, path.join(__dirname, '../public/img/productos'))
	},
	filename: function (req, file, cb) {
		cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname))
	}
});

let upload = multer({ storage: storage });

const productValidator = [
    check('productName').isLength({ max: 150 }).withMessage('El nombre del producto debe contener máximo 150 caracteres'),
    //La marca, subcategoria y mascota son valores numéricos porque son llaves foráneas
	check('brand').isNumeric().withMessage('La marca del producto unicamente acepta caracteres numéricos').isLength({ max: 20 }).withMessage('La marca del producto debe contener máximo 20 caracteres'),
    check('price').isNumeric().withMessage('El precio del producto unicamente acepta valores numéricos'),
	check('pet').isNumeric().withMessage('La sub-categoría del producto unicamente acepta caracteres numéricos').isLength({ max: 20 }).withMessage('El tipo de mascota debe contener máximo 20 caracteres'),
	check('subcategory').isNumeric().withMessage('La sub-categoría del producto unicamente acepta caracteres numéricos').isLength({ max: 20 }).withMessage('La subcategoria del producto debe contener máximo 20 caracteres'),
];

// ************ Controller Require ************
const adminController = require('../controllers/adminController');

/*** GET ALL PRODUCTS ***/

/*** CREATE ONE PRODUCT ***/
router.get('/addProduct', adminController.addProduct);

router.post('/addProduct', upload.single('productImage'), productValidator, adminController.storeProduct);

/*** EDIT ONE PRODUCT ***/
router.get('/editProduct/:id', adminController.editProduct);

router.post('/editProduct/:id', upload.single('productImage'), productValidator, adminController.updateProduct);

/*** DELETE ONE PRODUCT***/
router.delete('/deleteProduct/:id', adminController.destroyProduct);


module.exports = router;