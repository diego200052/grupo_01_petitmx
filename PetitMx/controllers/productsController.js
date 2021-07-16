const fs = require('fs');
const path = require('path');

const productsFilePath = path.join(__dirname, '../data/products.json');
let products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

const controlador = {
    products: (req, res) => {
        products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));
        res.render('products/products', {products: products});
    },
    productCart: (req, res) => {
        res.render('products/productCart');
    },
    productDetail: (req, res) => {
        const producto = products.find( (producto) => {
			return producto.id == req.params.id;
		});
        res.render('products/productDetail', {producto: producto});
    }
};

module.exports = controlador;