'use strict'

var express = require('express')
var bodyParser = require('body-parser');
var cors = require('cors')
var app = express();

var user_routes = require("./routes/user");
var proyecto_routes = require("./routes/proyecto");
var cliente_routes = require('./routes/cliente');
// var product_route = require("./routes/product-route.js")

//settings que respuesta va ser tipo json
app.use(cors())
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

app.use('/user',user_routes);
app.use('/proyecto',proyecto_routes);
app.use('/cliente',cliente_routes)
// app.use('/product',product_route)


module.exports = app;