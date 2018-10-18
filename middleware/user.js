'use strict'
var jwt = require('jwt-simple');
var secret = "Clavesecreta"
var connection = require('../connection');
function UserAuth(req, res, next) {
    if (!req.headers.authorization) {
        return res.status(403).send({ msg: "no tienes autorizacion" })
    }
    var token = req.headers.authorization.replace(/['"]+/g, '');
    try {
        var payload = jwt.decode(token, secret)
        console.log(payload);
        var sql = 'SELECT * FROM usuario where id_usuario=' + connection.escape(payload._id);
        connection.query(sql, function (error) {
            if (error) {
                return res.status(500).send({ msg: "error validando el token" })
            }
        })
    } catch (ex) {
        console.log(ex.message)
        if (ex.message === "Token expired") {
            return res.status(401).send({ msg: "token expirado" })
        }
        return res.status(403).send({ msg: "Token no vaildo" })
    }
    req.user = payload;
    next();
}
module.exports = {
    UserAuth
} 