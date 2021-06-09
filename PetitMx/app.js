// Require de Express
const express = require('express');

// Ejecución de Express
const app = express();

// Require path
const path = require('path');

// Uasndo recursos estáticos.
app.use(express.static('public'));

//Levantando el servidor en el puerto 3030
app.listen(3030,() => console.log('Server running in 3030 port'));

app.get('/home', (req, res) => {
    res.sendFile(path.resolve('./views/index.html'));
});

app.get('/login', (req, res) => {
    res.sendFile(path.resolve('./views/login.html'));
});

app.get('/productCart', (req, res) => {
    res.sendFile(path.resolve('./views/productCart.html'));
});

app.get('/productDetail', (req, res) => {
    res.sendFile(path.resolve('./views/productDetail.html'));
});

app.get('/register', (req, res) => {
    res.sendFile(path.resolve('./views/register.html'));
});

app.get('/', (req, res) => {
    res.sendFile(path.resolve('./views/index.html'));
});
