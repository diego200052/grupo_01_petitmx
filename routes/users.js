const express = require('express');
const router = express.Router();
const multer = require('multer');
const path = require('path');
let { check, validationResult, body } = require('express-validator');

const isLoggedIn = require('../middlewares/isLoggedIn');

//para guardar los datos en users.json***
const storageDisk = multer.diskStorage({
	destination: (req, file, cb) => {
		cb(null, path.join(__dirname, '../public/img/users/avatars'));
	},
	filename: (req, file, cb) => {
		let imageFinalName = 'user_avatar_'+ Date.now() + path.extname(file.originalname);
		cb(null, imageFinalName);
	}
});

const upload = multer({ storage: storageDisk });

// ************ Controller Require ************
const usersController = require('../controllers/usersController');

/* GET - Register. */
router.get('/register', usersController.register);

/* POST - Register. (con upload.single para subir un solo archivo) */
router.post('/register', upload.single('avatar'),[
    check('first_name').matches(/^[a-zA-Záéíóú\s]+$/).withMessage('El campo Nombre debe contener solo letras').isLength({min:3}).withMessage('El campo Nombre debe contener mínimo de 3 caracteres'),
    check('last_name').matches(/^[a-zA-Záéíóú\s]+$/).withMessage('El campo Apellido debe contener solo letras').isLength({min:3}).withMessage('El campo Apellido debe contener mínimo de 3 caracteres'),
    check('email').isEmail().withMessage('Debe ingresar un Email valido'),
    check('password').isLength({ min: 8 }).withMessage('La Contraseña debe tener por lo menos 8 caracteres'),

], usersController.store);

/* GET - Login. */
router.get('/login', usersController.login);

/* POST - Login. */
router.post('/login', 
[
	check('email').isEmail().withMessage('Debe ingresar un Email valido'),
    check('password').isLength({ min: 8 }).withMessage('La Contraseña debe tener por lo menos 8 caracteres'),
], usersController.processLogin);

/* GET - Contact. */
router.get('/contact', isLoggedIn , usersController.contact);

router.get('/logout', isLoggedIn, usersController.logout);

router.get('/account', isLoggedIn, usersController.account);
router.put('/account', isLoggedIn, upload.single('avatar'), usersController.updateAccount)



module.exports = router;