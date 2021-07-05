const controlador = {
    login: (req, res) => {
        res.render('users/login');
    },
    register: (req, res) => {
        res.render('users/register');
    },
    contact: (req, res) => {
        res.render('users/contact');
    }
};

module.exports = controlador;