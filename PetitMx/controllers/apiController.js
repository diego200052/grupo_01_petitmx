const fs = require('fs');
const path = require('path');
const db = require('../models');
const { validationResult } = require('express-validator');
const sequelize = db.sequelize;
 
const controller = {

    getUsers:(req, res) => {
        db.User.findAll({
            attributes: ['id_user', 'first_name', 'last_name'],        
            include: [{
                model: db.Login,
                as: 'logins',
                attributes: ['email']
            }]
        })
        .then(users => {
            let usersJSON = JSON.parse(JSON.stringify(users));
            for (let i=0; i<usersJSON.length; i++) {
                usersJSON[i].detailURL = "/api/users/" + usersJSON[i].id_user;
            }
            let result = {  
               count: users.length,
               users: usersJSON
           }
           return res.send(result);
       })
       .catch(error => console.log(error)); 
    },

    getProducts:(req, res) => {
        let countByCategory = db.Product.findAll(
            {
                attributes: [[sequelize.fn('COUNT', sequelize.col('Product.id_product')), 'ProductsByCategoryCount']],
                include: ['subcategorys'],
                group: ['subcategorys.id_subcategory'],
                raw:true
            }
        );
        
        let allProducts = db.Product.findAll({
            include: ['brand', 'subcategorys', 'pets']
        });
    
        Promise.all([allProducts, countByCategory])
        .then (function ([products, countByCategory]) {
            let productsJSON = JSON.parse(JSON.stringify(products));
            for (let i=0; i<productsJSON.length; i++) {
                productsJSON[i].detailURL = "/products/productDetail/" + productsJSON[i].id_product;
            }
            let result = {
                count: products.length,
                countByCategory: countByCategory,
                products: productsJSON
            }
            return res.send(result);
        })
        .catch(error => console.log(error)); 
    },

    getUser: (req, res) => {
        db.User.findByPk(req.params.id, {
            attributes: ['id_user', 'first_name', 'last_name', 'avatar'],        
            include: [{
                model: db.Login,
                as: 'logins',
                attributes: ['email']
            }]
        })
        .then(user => {
            if (user) {
                user["avatar"] = "/img/users/avatars/" + user.avatar;
                res.send(user);
            } else {
                res.send({error:"El usuario no existe."})
            }
        })
        .catch(error => res.send(error)); 
    },

    getProduct: (req, res) => {
        db.Product
        .findByPk(req.params.id, { include: ['brand', 'subcategorys', 'pets'] })
        .then(function(product) {
            if (product) {
                product["image"] = "/img/productos/" + product.image;
                res.send(product);
            } else {
                res.send({error:"El producto no existe."})
            }
        })
        .catch(error => res.send(error)); 
    }
}

module.exports = controller