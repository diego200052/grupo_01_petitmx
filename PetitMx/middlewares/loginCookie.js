const fs = require('fs');
const path = require('path');

const db = require('../models');
const sequelize = db.sequelize;

const loginCookie = async (req, res, next) => {
    /* Si el usuario tiene la cookie con su ID y la sessión está indefinida,
    se inicia sesión */
    if (req.cookies.userID && req.session.user === undefined) {
        /* Buscar al usuario en el archivo json */
        let user = await db.User.findByPk(req.cookies.userID);
        console.log(user);
        /* Si existe el usuario entonces lo logeamos */
        if(user != undefined)
            req.session.user = user;
        else
            /* Eliminamos la cookie */
            res.cookie('userID', '', {expires: new Date(0)});
    }
    /* Guardar datos escenciales del usuario en variables globales */
    if(req.session.user) {
        res.locals.nombreU = req.session.user.first_name;
        res.locals.apellidoU = req.session.user.last_name;
        res.locals.avatarU = req.session.user.avatar;
    }
    /* Si no está logeado son indefinidas */
    else {
        res.locals.nombreU = undefined;   
        res.locals.apellidoU = undefined;
        res.locals.avatarU = undefined;
    }
    next();
}
module.exports = loginCookie;