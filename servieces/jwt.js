'use strict'
var jwt = require('jwt-simple');
var moment = require('moment');
var secret = "Clavesecreta"
exports.creatToken = function(user){
    var payload = {
        _id: user.id_usuario,
        nombre: user.nombre,
        usuario: user.usuario,
        password: user.password,
        iat: moment().unix(),
        exp: moment().add(1,"d").unix()
    }
    return jwt.encode(payload,secret);
}