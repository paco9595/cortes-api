'use strict'
var express = require('express')
var api = express.Router();


var proyectoController = require("../controllers/proyecto")
var mddlUser = require('../middleware/user').UserAuth;

api.get('/get', mddlUser, proyectoController.get)
api.post('/creat', mddlUser, proyectoController.creat)


module.exports = api