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

		Promise.all([producto, pets])
		.then(function([producto, pets]) {
			if(producto) {
				console.log(pets);
				res.render('admin/editProduct', { producto, pets });
			}
            else
                res.status(404).render("not-found");
        });
    },

	// Update - Method to update
	updateProduct: (req, res) => {
		const file = req.file;
		if(!file) {
			products.forEach( (producto) => {
				if(producto.id == req.params.id) {
					
					producto.nombre = req.body.productName;
					producto.marca = req.body.brand;
					producto.precio = req.body.price;
					producto.descripcion = req.body.description;
					producto.caracteristicas = req.body.features;
					producto.instrucciones = req.body.instructions;
					producto.categoria = req.body.category;
					
				}
			});
		}
		else {
			products.forEach( (producto) => {
				if(producto.id == req.params.id) {
					
					producto.nombre = req.body.productName;
					producto.marca = req.body.brand;
					producto.precio = req.body.price;
					producto.descripcion = req.body.description;
					producto.caracteristicas = req.body.features;
					producto.instrucciones = req.body.instructions;
					producto.imagen = file.filename;
					producto.categoria = req.body.category;
					
				}
			});
		}
		fs.writeFileSync(productsFilePath, JSON.stringify(products, null, 2));
		res.redirect('/products');
	},

    addProduct: (req, res) => {
        res.render('admin/addProduct');
    },

	// Create -  Method to store
	storeProduct: (req, res) => {
		const file = req.file;
		if(!file) {
		  const error = new Error('Por favor, seleccione un archivo');
		  error.httpStatusCode = 404;
		  return next(error);
		}

		let producto = {
			id: products[products.length-1].id+1,
			nombre: req.body.productName,
			marca: req.body.brand,
			precio: req.body.price,
			descripcion: req.body.description,
			caracteristicas: req.body.features,
			instrucciones: req.body.instructions,
			imagen: file.filename,
			categoria: req.body.category
		};
		products.push(producto);
		fs.writeFileSync(productsFilePath, JSON.stringify(products, null, 2));
		res.redirect('/products');
	},

    // Delete - Delete one product from DB
	destroyProduct : (req, res) => {
		// Do the magic
		products = products.filter( (product) => {
			return product.id != req.params.id;
		});
		fs.writeFileSync(productsFilePath, JSON.stringify(products, null, 2));
		res.redirect('/products');
	}
};

module.exports = controlador;