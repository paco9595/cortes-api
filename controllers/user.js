'use strict'
var bcrypt = require('bcrypt-nodejs');
const jwt = require('../servieces/jwt');
const mysql = require('mysql');
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'cortes'
});

function pruebas(req, res) {
    var parmas = req.query;
    console.log(parmas)
    var sql = 'SELECT * FROM usuario where usuario=' + connection.escape(parmas.usuario);
    console.log(sql)
    connection.query(sql, function (error, results, fields) {
        if (error) throw error;
        bcrypt.compare(parmas.password, results[0].password, (err, check) => {
            if (!check) {
                return res.status(500).send({ msg: "password Incorrecta" })
            }
            if (err) {
                return res.status(500).send({ msg: "Error buscando usuario" })
            }
            if (parmas.token) {
                return res.status(200).send({ token: jwt.creatToken(userSearch) })
            } else {
                return res.status(200).send({ user: results, token: jwt.creatToken(userSearch) })
            }
        })
    });
}
function creat(req, res) {
    var query = req.query;
    var newUser = { 
        nombre:query.nombre,
        usuario:query.usuario,
        password: query.password
    };
    bcrypt.hash(newUser.password,null,null,(err,hash)=>{
        if(err || !hash){
            return res.status(500).send({msg:"error al momento de encriptar contrase;a"})
        }
        newUser.password = hash
        var query = connection.query('INSERT INTO usuario SET ?', newUser, function (error, results, fields) {
            if (error) throw error;
            console.log(results)
            res.status(200).send({results})
        });
    })
}
module.exports = {
    pruebas,
    creat
};