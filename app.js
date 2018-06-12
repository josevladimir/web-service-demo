const bodyParser = require("body-parser");
const express = require("express");

const app = express();

const database = require('./config/database');

const config = require('./config/config');
const products = require('./routes/products');


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false})); //Cambiar a false si no se van a enviar datos por formulario

app.use(express.static('public'));

app.set('view engine','pug');

app.use('/products',products);

database.connect();

app.listen(config.PORT,function(err){
    if(err) return console.log(err);
    return console.log(`Servidor corriendo en el puerto ${config.PORT}`);
});