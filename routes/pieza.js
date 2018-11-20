'use strict'
var express = require('express')
var api = express.Router();


var piezaController = require("../controllers/pieza")
var mddlUser = require('../middleware/user').UserAuth;

api.get('/get',piezaController.get)
api.post('/creat',mddlUser,piezaController.creat)

//api.get('/login',userController.login)

module.exports = api