const fs = require('fs');
const path = require('path');
const db = require('../models');
const { validationResult } = require('express-validator');
const sequelize = db.sequelize;

const controlador = {
    editProduct: (req, res) => {
		let producto = db.Product.findByPk(req.params.id, {
            include: ['brand', 'subcategorys', 'pets']
        });
		let pets = db.Pet.findAll();
		let brands = db.Brands.findAll();
		let subcategorys = db.Subcategory.findAll();

		Promise.all([producto, pets, brands, subcategorys])
		.then(function([producto, pets, brands, subcategorys]) {
			if(producto) {
				res.render('admin/editProduct', { producto, pets, brands, subcategorys });
			}
            else
                res.status(404).render("not-found");
        });
    },

	// Update - Method to update
	updateProduct: (req, res) => {
		const file = req.file;

		let errors = validationResult(req);
		console.log(errors);

		/* Validación de errores en el formulario */
		if(errors.isEmpty())
		{
			if(!file) {
				db.Product.update(
				{
					productName: req.body.productName,
					price: req.body.price,
					ingredients: req.body.ingredients,
					description: req.body.description,
					instructions: req.body.instructions,
					subcategory_id: req.body.subcategory,
					brand_id: req.body.brand,
					pet_id: req.body.pet
				},
				{
					where: { id_product: req.params.id }
				})
				.then(() => {
					return res.redirect('/products');
				})
				.catch(error => res.send(error));

			}
			else {

				db.Product.update(
				{
					productName: req.body.productName,
					price: req.body.price,
					ingredients: req.body.ingredients,
					description: req.body.description,
					instructions: req.body.instructions,
					image: file.filename,
					subcategory_id: req.body.subcategory,
					brand_id: req.body.brand,
					pet_id: req.body.pet
				},
				{
					where: { id_product: req.params.id }
				})
				.then(() => {
					return res.redirect('/products');
				})
				.catch(error => res.send(error));
			}
		}
		else {
			let producto = db.Product.findByPk(req.params.id, {
				include: ['brand', 'subcategorys', 'pets']
			});
			let pets = db.Pet.findAll();
			let brands = db.Brands.findAll();
			let subcategorys = db.Subcategory.findAll();
	
			Promise.all([producto, pets, brands, subcategorys])
			.then(function([producto, pets, brands, subcategorys]) {
				if(producto) {
					res.render('admin/editProduct', { producto, pets, brands, subcategorys, errors: errors.array(), old: req.body });
				}
				else
					res.status(404).render("not-found");
			});
		}
	},

    addProduct: (req, res) => {
		let pets = db.Pet.findAll();
		let brands = db.Brands.findAll();
		let subcategorys = db.Subcategory.findAll();

		Promise.all([pets, brands, subcategorys])
		.then(function([pets, brands, subcategorys]) {
			res.render('admin/addProduct', { pets, brands, subcategorys });
        });
    },

	// Create -  Method to store
	storeProduct: (req, res) => {
		const file = req.file;
		if(!file) {
		  const error = new Error('Por favor, seleccione un archivo de imagen para el producto.');
		  error.httpStatusCode = 404;
		  return next(error);
		}

		let errors = validationResult(req);

		/* Validación de errores en el formulario */
		if(errors.isEmpty())
		{
			var keys=req.body;
			console.log(keys);
			db.Product.create(
			{
				productName: req.body.productName,
				price: req.body.price,
				ingredients: req.body.ingredients,
				description: req.body.description,
				instructions: req.body.instructions,
				image: file.filename,
				subcategory_id: req.body.subcategory,
				brand_id: req.body.brand,
				pet_id: req.body.pet
			})
			.then(() => {
				return res.redirect('/products');
			})
			.catch(error => res.send(error));
		}
		else {
			let pets = db.Pet.findAll();
			let brands = db.Brands.findAll();
			let subcategorys = db.Subcategory.findAll();

			Promise.all([pets, brands, subcategorys])
			.then(function([pets, brands, subcategorys]) {
				return res.render('admin/addProduct', { pets, brands, subcategorys, errors: errors.array(), old: req.body });
			});
		}
	},

    // Delete - Delete one product from DB
	destroyProduct : (req, res) => {
		db.Product
        .destroy({ 
            where: { id_product: req.params.id }
        }) 
        .then(() => {
            return res.redirect('/products')
        })
        .catch(error => res.send(error));
	}
};

module.exports = controlador;