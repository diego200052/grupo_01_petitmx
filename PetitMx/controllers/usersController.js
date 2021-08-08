const fs = require('fs');
const bcrypt = require('bcrypt');
let { check, validationResult, body } = require('express-validator');

// Constants
const userFilePath = __dirname + '/../data/users.json';


const controlador = {
    login: (req, res) => {
        res.render('users/login');
    },
    register: (req, res) => {
        res.render('users/register');
    },
    store: (req, res) => {
		let errors = (validationResult(req));
			console.log(errors);
			
		if (errors.isEmpty()) {


				const userData = {
					first_name: req.body.first_name,
					last_name: req.body.last_name,
					email: req.body.email,
					password: req.body.password,				
					avatar: req.file.filename,
				}
				console.log(" - - - - - - - - - user data - - - - - - - - - - - - -")
				console.log(userData)

				//aca convierto la contraseña en cifrado
				.then(users => {
					
					/* si no me encuentra al usuario */
					if (!users) {
						bcrypt.hash(req.body.password, 10, (err, hash) => {
							userData.password = hash
						db.Users
						.create(userData)
						.then(users => {
							
							res.render('users/login');
						})
						.catch(error => console.log(error));
						})
					}else{
						res.render('users/register', {users})
					}
				})
		
	} else {
			res.render('users/register', {errors: errors.errors})
		}
	},
    contact: (req, res) => {
        res.render('users/contact');
    }
};

module.exports = controlador;