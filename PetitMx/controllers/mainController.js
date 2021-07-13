const controlador = {
    index: (req, res) => {
        res.render('index');
    },

    nosotros: (req, res) => {
        res.render('nosotros');
    }
};

module.exports = controlador;