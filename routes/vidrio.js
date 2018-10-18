'use strict'
var express = require('express')
var api = express.Router();


var vidrioController = require("../controllers/vidrio")
var mddlUser = require('../middleware/user').UserAuth;

api.get('/get' ,vidrioController.get)
api.get('/creat',mddlUser,vidrioController.creat)

//api.get('/login',userController.login)

module.exports = api