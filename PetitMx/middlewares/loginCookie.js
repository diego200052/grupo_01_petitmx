const fs = require('fs');
const path = require('path');

const userFilePath  =path.join(__dirname, '/../data/users.json');
let users = JSON.parse(fs.readFileSync(userFilePath, 'utf-8'));

const loginCookie = async (req, res, next) => {
    /* Si el usuario tiene la cookie con su ID y la sessión está indefinida,
    se inicia sesión */
    if (req.cookies.userIdCookie != undefined && req.session.user == undefined) {
        /* Buscar al usuario en el archivo json */
        let user = users.find(user => user.correo == req.body.email);
        /* Si existe el usuario entonces lo logeamos */
        if(user != undefined)
            req.session.user = user;
        else
            /* Eliminamos la cookie */
            res.cookie('userID', { expires: Date.now() } );
    }
    next();
}
module.exports = loginCookie;