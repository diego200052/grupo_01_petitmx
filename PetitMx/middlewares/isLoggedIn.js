const fs = require('fs');
const path = require('path');

const userFilePath  =path.join(__dirname, '/../data/users.json');

const isLoggedIn = async (req, res, next) => {
    /* Si el usuario tiene la cookie con su ID y la sessión está definida,
    se inicia sesión */
    if (req.session.user) {
        next();
    }
    else {
        res.redirect("/users/login");
    }
}
module.exports = isLoggedIn;