'use strict'
const connection = require('../connection');

function get(req, res) {
    var parmas = req.query;
    var sql = 'SELECT * FROM cliente ' + id ? "where cliente = " + connection.escape(parmas.usuario) : "";
    connection.query(sql, function (error, results) {
        if (error) return res.status(500).send({ error });
        return res.status(200).send({ results })
    });
}
function creat(req, res) {
    var query = req.query;
    if (!query.usuario && !query.nombre && !query.dirrecion && !query.telefono && !query.correo && !query.fecha) {
        return res.status(400).send({ msg: "bad request" })
    }
    var newCliente = {
        id_usuario: query.usuario,
        nombre: query.nombre,
        dirrecion: query.dirrecion,
        telefono: query.telefono,
        correo: query.correo,
        fecha_registro: Date(query.fecha)
    };
    newUser.password = hash
    var query = connection.query('INSERT INTO cliente SET ?', newCliente, function (error, results, fields) {
        if (error) throw error;
        console.log(results)
        res.status(200).send({ results })
    });
}
module.exports = {
    get,
    creat
};