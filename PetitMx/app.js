// Require de Express
const express = require('express');
const mainRoutes = require('./routes/main')
const usersRoutes = require('./routes/users')
const productsRoutes = require('./routes/products')
const adminRoutes = require('./routes/admin')

// Ejecución de Express
const app = express();

// Require path
const path = require('path');

// Uasndo recursos estáticos.
app.use(express.static('public'));

app.set('view engine', 'ejs');

//Levantando el servidor en el puerto 3030
app.listen(3030,() => console.log('Server running in 3030 port'));

app.use('/', mainRoutes);
app.use('/users', usersRoutes);
app.use('/products', productsRoutes);
app.use('/admin', adminRoutes);

app.use((req, res, next) => {
    res.status(404).render("not-found");
})