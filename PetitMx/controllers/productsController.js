const fs = require('fs');
const path = require('path');
const db = require('../models');
const sequelize = db.sequelize;
const { Op } = require("sequelize");

const controlador = {
    products: (req, res) => {
        if(req.query.search)
        {
            console.log(req.query.search.split(" "));
            let wordsQuery = req.query.search.split(" ");
            let stringQuery = "";
            for(let i = 0; i<wordsQuery.length; i++)
            {
                if((i+1) == wordsQuery.length)
                    stringQuery+= wordsQuery[i]
                else
                    stringQuery+= wordsQuery[i] + "|"
            }
            db.Product.findAll( { 
                where: {
                    productName: {
                        [Op.regexp]: '^['+stringQuery+']',
                      }
                }
            })
            .then( products => {
                res.render('products/products', {products: products});
            });
        }
        else {
            db.Product.findAll()
            .then( products => {
                res.render('products/products', {products: products});
            });
        }
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