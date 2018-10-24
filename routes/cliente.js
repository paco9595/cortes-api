'use strict'
var express = require('express')
var api = express.Router();


var clienteController = require("../controllers/cliente")
var mddlUser = require('../middleware/user').UserAuth;

api.get('/get',mddlUser ,clienteController.get)
api.post('/creat',mddlUser,clienteController.creat)
api.delete('/delete',mddlUser,clienteController.Delete)
//api.get('/login',userController.login)

module.exports = api