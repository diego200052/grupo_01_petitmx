const controlador = {
    editProduct: (req, res) => {
        res.render('admin/editProduct');
    },
    addProduct: (req, res) => {
        res.render('admin/addProduct');
    }
};

module.exports = controlador;