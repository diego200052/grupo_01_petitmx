const fs = require('fs');
const path = require('path');
const bcrypt = require('bcryptjs');
const { validationResult } = require('express-validator');

// Constants
const userFilePath  =path.join(__dirname, '/../data/users.json');
let users = JSON.parse(fs.readFileSync(userFilePath, 'utf-8'));

const controlador = {
    login: (req, res) => {
        res.render('users/login');
    },
	processLogin: (req, res) => {
		let errors = validationResult(req);

		/* Validación de errores en el formulario */
        if(errors.isEmpty())
		{
			let user = users.find(user => user.correo == req.body.email);
			console.log(user);
			/* Verificación si el usuario existe en la base de datos (json) */
			if(user != undefined)
			{
				/* Validación de la contraseña */
				if (bcrypt.compareSync(req.body.password, user.contrasenia))
				{
					// Se guarda el usuario en un session
					req.session.user = user;
					// Cookie para recordar al usuario
					if (req.body.rememberMe)
						res.cookie('userID', user.id, { maxAge: 60000 * 60 });
					res.redirect('/');
				}
				else {
					/* Contraseña incorrecta */
					res.render("users/login", { errors: [{msg:"Contraseña incorrecta."}] } );
				}
			}
			else {
				/* Usuario no existe */
				res.render("users/login", { errors: [{msg:"El usuario ingresado no existe."}] } );
			}
		}
		else {
			return res.render('users/login', { errors: errors.array() });
		}
	},
	logout: (req, res) => {
		res.cookie('userID', '', {expires: new Date(0)});
		req.session.user = undefined;
		res.redirect('/');
	},
    register: (req, res) => {
        res.render('users/register');
    },
	// Create -  Method to store
    store: (req, res) => {
		const file = req.file;
		if(!file) {
		  const error = new Error('Por favor, seleccione un archivo');
		  error.httpStatusCode = 404;
		  return next(error);
		}
			let errors = validationResult(req);

		/* Validación de errores en el formulario */
		if(errors.isEmpty())
		{
			let passwordHash = bcrypt.hashSync(req.body.password, 10);	
			// Cómo se van a registrar los administradores???. 
			// Por default le dejo 0 - Cliente
			let usuario = {
				id: users[users.length-1].id+1,
				nombre: req.body.first_name,
				apellido: req.body.last_name,
				correo: req.body.email,
				contrasenia: passwordHash,
				avatar: file.filename,
				rol: 0
			};
				
			users.push(usuario);
			fs.writeFileSync(userFilePath, JSON.stringify(users, null, 2));
			users = JSON.parse(fs.readFileSync(userFilePath, 'utf-8'));
			res.redirect('/');
		}
		else {
			return res.render('users/register', { errors: errors.array() });
		}
	},
    contact: (req, res) => {
        res.render('users/contact', {user: req.session.user});
    }
};

module.exports = controlador;