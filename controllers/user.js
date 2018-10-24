'use strict'
var bcrypt = require('bcrypt-nodejs');
const jwt = require('../servieces/jwt');

const connection = require('../connection').connection;

function login(req, res) {
    var parmas = req.query;
    var sql = 'SELECT * FROM usuario where usuario=' + connection.escape(parmas.usuario);
    connection.query(sql, function (error, results, fields) {
        if (error) return res.status(500).send({ msg: "password Incorrecta" })
        if(results.length > 0){
            bcrypt.compare(parmas.password, results[0].password, (err, check) => {
                if (!check) {
                    return res.status(500).send({ msg: "password Incorrecta" })
                }else if (err) {
                    return res.status(500).send({ msg: "Error buscando usuario" })
                }else {
                    console.log(results[0])
                    return res.status(200).send({ user: results, token: jwt.creatToken(results[0]) })
                }
            })    
        }else{
            return res.status(200).send({user:results})
        }
    });
}
function creat(req, res) {
    var query = req.query;
    if (!query.nombre && !query.usuario && !query.password) return res.status(400).send({msg: "bad request"});p
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
    login,
    creat
};