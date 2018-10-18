'use strict'
var express = require('express')
var api = express.Router();


var userController = require("../controllers/user")


api.get('/login' ,userController.pruebas)
api.get('/creat' ,userController.creat)
//api.get('/login',userController.login)

module.exports = api