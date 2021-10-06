const fs = require('fs');
const path = require('path');
const db = require('../models');
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
		if(!file) {
			db.Product.update(
			{
				productName: req.body.productName,
				price: req.body.price,
				ingredients: req.body.features,
				description: req.body.description,
				instructions: req.body.instructions,
				subcategory_id: req.body.category,
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
				ingredients: req.body.features,
				description: req.body.description,
				instructions: req.body.instructions,
				image: file.filename,
				subcategory_id: req.body.category,
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
		db.Product.create(
		{
			productName: req.body.productName,
			price: req.body.price,
			ingredients: req.body.features,
			description: req.body.description,
			instructions: req.body.instructions,
			image: file.filename,
			subcategory_id: req.body.category,
			brand_id: req.body.brand,
			pet_id: req.body.pet
		})
		.then(() => {
			return res.redirect('/products');
		})
		.catch(error => res.send(error));
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