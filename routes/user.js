'use strict'
var express = require('express')
var api = express.Router();


var userController = require("../controllers/user")

var mddlUser = require('../middleware/user').UserAuth;

api.get('/login' ,userController.login)
api.get('/creat', mddlUser ,userController.creat)

//api.get('/login',userController.login)

module.exports = api