'use strict'
var express = require('express')
var api = express.Router();


var proyectoController = require("../controllers/projecto")
var mddlUser = require('../middleware/user').UserAuth;

api.get('/get' ,proyectoController.get)
api.get('/creat',mddlUser,proyectoController.creat)

//api.get('/login',userController.login)

module.exports = api