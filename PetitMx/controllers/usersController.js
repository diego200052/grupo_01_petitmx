const fs = require('fs');
const path = require('path');
const bcrypt = require('bcryptjs');
const { validationResult } = require('express-validator');
const db = require('../models');
const sequelize = db.sequelize;

const controlador = {
    login: (req, res) => {
        return res.render('users/login');
    },
	processLogin: (req, res) => {
		let errors = validationResult(req);

		/* Validación de errores en el formulario */
        if(errors.isEmpty())
		{
			db.Login.findAll({
				where: { email: req.body.email }
			})
			.then(( logins ) => {
				let login = logins[0];
				/* Verificación si el usuario existe en la base de datos (json) */
				if(login != undefined)
				{
					/* Validación de la contraseña */
					if (bcrypt.compareSync(req.body.password, login.password))
					{
						db.User.findAll({
							where: { login_id: login.id_login }
						})
						.then(( usersInfo ) => {
							let user = usersInfo[0];
							// Se guarda la información en un session
							req.session.user = user;
							console.log(user);
							// Cookie para recordar al usuario
							if (req.body.rememberMe)
								res.cookie('userID', user.id_user, { maxAge: 60000 * 60 });
							res.redirect('/');
						})
						.catch(error => res.send(error));
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
			})
			.catch(error => res.send(error));
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
		  const error = new Error('Por favor, seleccione un archivo de imagen para su perfil.');
		  error.httpStatusCode = 404;
		  return next(error);
		}
			let errors = validationResult(req);

		/* Validación de errores en el formulario */
		if(errors.isEmpty())
		{
			let passwordHash = bcrypt.hashSync(req.body.password, 10);	

			// Por default el rol: ID 1 - Cliente
			db.Login.create(
			{
				email: req.body.email,
				password: passwordHash,
			})
			.then(( newLogin ) => {
				db.User.create(
				{
					first_name: req.body.first_name,
					last_name: req.body.last_name,
					status: 1,
					avatar: file.filename,
					rol_id: 1,
					login_id: newLogin.id_login
				})
				.then(() => {
					return res.redirect('/');
				})
				.catch(error => res.send(error));
			})
			.catch(error => res.send(error));
		}
		else {
			return res.render('users/register', { errors: errors.array() });
		}
	},
    contact: (req, res) => {
        res.render('users/contact', {user: req.session.user});
    },
	account: (req, res) => {
		let user = db.User.findByPk(req.session.user.id_user);
		let login = db.Login.findByPk(req.session.user.login_id);
		Promise.all([user, login])
		.then(function([user, login]) {
			return res.render('users/account', {user, email:login.email} );
		})
		.catch(error => res.send(error));
	},
	updateAccount: (req, res) => {
		let user = { 
			first_name : req.body.first_name,
			last_name : req.body.last_name,
			avatar : req.body.avatar
		}
		let email = req.body.email;
		/* Verifica si ingresó una contraseña para cambiarla */
		if(req.body.password)
		{
			if(req.body.rePassword)
			{
				if(req.body.password === req.body.rePassword)
				{
					/* Si ambas contraseñas coinciden se actualiza la contraseña */
					let passwordHash = bcrypt.hashSync(req.body.password, 10);
					db.Login.update(
					{
						password : passwordHash
					},
					{
						where: { id_login: req.session.user.login_id }
					})
				}
				else {
					return res.render('users/account', {user, email, errors: [{msg: "Las contraseñas no coinciden."}]} );
				}
			}
			else {
				return res.render('users/account', {user, email, errors: [{msg: "Debes ingresar la contraseña nueva en ambos cambos."}]} );
			}
		}

		const file = req.file;
		/* Actualiza los valores locales del usuario */
		res.locals.nombreU = req.body.first_name;
		res.locals.apellidoU = req.body.last_name;
		req.session.user.first_name = req.body.first_name;
		req.session.user.last_name = req.body.last_name;
		/* Si el usuario no sube foto actualizamos lo demás en base de datos sin la foto */
		if(!file) {
			db.User.update(
			{
				first_name: req.body.first_name,
				last_name: req.body.last_name
			},
			{
				where: { id_user: req.session.user.id_user }
			})
			.then(() => {
				db.Login.update(
				{
					email : req.body.email
				},
				{
					where: { id_login: req.session.user.login_id }
				})
				.then(() => {
					return res.redirect('/');
				})
				.catch(error => res.send(error));
			})
			.catch(error => res.send(error));
		}
		/* Si el usuario sube una foto nueva la actualizamos todo en la base de datos */
		else {
			res.locals.avatarU = file.filename;
			req.session.user.avatar = file.filename;
			db.User.update(
			{
				first_name: req.body.first_name,
				last_name: req.body.last_name,
				avatar: file.filename
			},
			{
				where: { id_user: req.session.user.id_user }
			})
			.then(() => {
				db.Login.update(
				{
					email : req.body.email
				},
				{
					where: { id_login: req.session.user.login_id }
				})
				.then(() => {
					return res.redirect('/');
				})
				.catch(error => res.send(error));
			})
			.catch(error => res.send(error));
		}
	}
};

module.exports = controlador;