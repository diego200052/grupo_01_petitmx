const fs = require('fs');
const path = require('path');
const db = require('../models');
const sequelize = db.sequelize;

const controlador = {
    products: (req, res) => {
        db.Product.findAll()
        .then( products => {
            res.render('products/products', {products: products});
        });
    },
    productCart: (req, res) => {
        res.render('products/productCart');
    },
    productDetail: (req, res) => {
        db.Product.findByPk(req.params.id)
        .then( producto => {
            if(producto)
                res.render('products/productDetail', {producto: producto});
            else
                res.status(404).render("not-found");
        });       
    }
};

module.exports = controlador;