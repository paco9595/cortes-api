'use strict'
var express = require('express')
var api = express.Router();


var corteController = require("../controllers/corte")
var mddlUser = require('../middleware/user').UserAuth;

api.get('/get' ,corteController.get)
api.get('/creat',mddlUser,corteController.creat)

//api.get('/login',userController.login)

module.exports = api