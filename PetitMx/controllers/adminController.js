const fs = require('fs');
const path = require('path');

const productsFilePath = path.join(__dirname, '../data/products.json');
let products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));


const controlador = {
    editProduct: (req, res) => {
        res.render('admin/editProduct');
    },
    addProduct: (req, res) => {
        res.render('admin/addProduct');
    },

    // Delete - Delete one product from DB
	destroyProduct : (req, res) => {
		// Do the magic
		products = products.filter( (product) => {
			return product.id != req.params.id;
		});
		fs.writeFileSync(productsFilePath, JSON.stringify(products, null, 2));
		res.redirect('admin/products');
	}
};

module.exports = controlador;