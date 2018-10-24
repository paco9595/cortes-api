'use strict'

const connection = require('../connection').connection;

function get(req, res) {
    var id = req.query.id;
    var sql = 'SELECT * FROM proyecto ' + id ? "where id_proyecto = " + connection.escape(parmas.usuario) : "";
    connection.query(sql, function (error, results) {
        if (error) return res.status(500).send({ error });
        return res.status(200).send({ results })
    });
}
function creat(req, res) {
    var query = req.query;
    if (!query.usuario && !query.nombre && !query.espesor) return res.status(400).send({ msg: "bad request" });
    var newVidrio = {
        id_usuario: query.usuario,
        nombre: query.nombre,
        espesor: query.espesor
    };
    var query = connection.query('INSERT INTO vidrio SET ?', newVidrio, function (error, results, fields) {
        if (error) return res.status(500).send({msg:"internal error"})
        res.status(200).send({ results })
    });
}
module.exports = {
    get,
    creat
};