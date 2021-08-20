const fs = require('fs');
const path = require('path');

const userFilePath  =path.join(__dirname, '/../data/users.json');
let users = JSON.parse(fs.readFileSync(userFilePath, 'utf-8'));

const loginCookie = async (req, res, next) => {
    /* Si el usuario tiene la cookie con su ID y la sessión está indefinida,
    se inicia sesión */
    if (req.cookies.userID && req.session.user === undefined) {
        /* Buscar al usuario en el archivo json */
        let user = users.find(user => user.id == req.cookies.userID);
        console.log(user);
        /* Si existe el usuario entonces lo logeamos */
        if(user != undefined)
            req.session.user = user;
        else
            /* Eliminamos la cookie */
            res.cookie(userID, '', {expires: new Date(0)});
    }
    next();
}
module.exports = loginCookie;