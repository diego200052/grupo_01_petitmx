const express = require('express');
const router = express.Router();
const multer = require('multer');
const path = require('path');
let { check, validationResult, body } = require('express-validator');



//para guardar los datos en users.json***
const storageDisk = multer.diskStorage({
	destination: (req, file, cb) => {
		cb(null, __dirname + '/../../public/img/users/avatars');
	},
	filename: (req, file, cb) => {
		let imageFinalName = `user_avatar_${Date.now()}${path.extname(file.originalname)}`;
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
    check('first_name').isAlpha().withMessage('El campo Nombre debe contener solo letras').isLength({min:3}).withMessage('El campo Nombre debe contener mínimo de 3 caracteres'),
    check('last_name').isAlpha().withMessage('El campo Apellido debe contener solo letras').isLength({min:3}).withMessage('El campo Apellido debe contener mínimo de 3 caracteres'),
    check('email').isEmail().withMessage('Debe ingresar un Email valido'),
    check('password').isLength({ min: 3 }).withMessage('La Contraseña debe tener por lo menos 3 caracteres'),

], usersController.store);

/* GET - Login. */
router.get('/login', usersController.login);

/* POST - Login. */
router.post('/login', usersController.processLogin);

/* GET - Contact. */
router.get('/contact', usersController.contact);

/* GET - Listado. */
router.get('/listado', usersController.show);
router.get('/listado-tabla', usersController.showTabla);

/* >>>>>>>>>>>>>>>>> BORRAR User desde Listado <<<<<<<<<<<<<<<<<<<<< */
router.post ('/borrar', usersController.borrarUser);

/* >>>>>>>>>>>>>>>>> cambiar ROL de usuario <<<<<<<<<<<<<<<<<<<<< */
router.post('/changerole', usersController.changeRole);

/* GET - Login. */
router.get('/profile/:id', usersController.profile);

/*  EDITAR */
router.get('/editarUser/:id', usersController.edit);
router.post('/editarUser/:id', upload.single('avatar'), usersController.update);
/* EDITAR AVATAR */
 router.get('/editarAvatar/:id',  usersController.editarAvatar);
 router.post('/editarAvatar/:id', upload.single('avatar'), usersController.updateAvatar);

/* GET - /users/logout */
router.get('/logout', usersController.logout);


module.exports = router;