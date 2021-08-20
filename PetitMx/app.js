// Require de Express
const express = require('express');
const mainRoutes = require('./routes/main')
const usersRoutes = require('./routes/users')
const productsRoutes = require('./routes/products')
const adminRoutes = require('./routes/admin')
const methodOverride =  require('method-override'); // Pasar poder usar los métodos PUT y DELETE
const session = require('express-session');

const loginCookie = require('./middlewares/loginCookie');

// ************ express() - (don't touch) ************
const app = express();

// Require path
const path = require('path');
const cookieParser = require('cookie-parser');

// Uasndo recursos estáticos.
app.use(express.static('public'));
app.use(methodOverride('_method')); // Pasar poder pisar el method="POST" en el formulario por PUT y DELETE

/* Configuración de express-session */
app.use( session({
    secret: 'qwertyuiop',
    resave: false,
    saveUninitialized: false,
  }) );

// ************ Template Engine - (don't touch) ************
app.set('view engine', 'ejs');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(loginCookie);

//Levantando el servidor en el puerto 3030
app.listen(3030,() => console.log('Server running in 3030 port'));

app.use('/', mainRoutes);
app.use('/users', usersRoutes);
app.use('/products', productsRoutes);
app.use('/admin', adminRoutes);

// ************ error handler ************
app.use((req, res, next) => {
    // render the error page
    res.status(404).render("not-found");
});