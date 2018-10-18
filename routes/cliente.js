'use strict'
var express = require('express')
var api = express.Router();


var clienteController = require("../controllers/cliente")
var mddlUser = require('../middleware/user').UserAuth;

api.get('/get' ,clienteController.get)
api.get('/creat',mddlUser,clienteController.creat)

//api.get('/login',userController.login)

module.exports = api