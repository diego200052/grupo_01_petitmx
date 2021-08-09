const fs = require('fs');
const path = require('path');
const bcrypt = require('bcryptjs');

// Constants
const userFilePath  =path.join(__dirname, '/../data/users.json');
let users = JSON.parse(fs.readFileSync(userFilePath, 'utf-8'));

const controlador = {
    login: (req, res) => {
        res.render('users/login');
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
				tipo: 0
			};
				
		users.push(usuario);
		fs.writeFileSync(userFilePath, JSON.stringify(users, null, 2));
		res.redirect('/users/register');
	},
    contact: (req, res) => {
        res.render('users/contact');
    }
};

module.exports = controlador;