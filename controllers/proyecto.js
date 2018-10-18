'use strict'

const connection = require('../connection');

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
    if (!query.cliente && !query.usuario && !query.fecha_inicio && !query.fecha_fin) return res.status(400).send({ msg: "bad request" });
    var newProyecto = {
        id_cliente: query.cliente,
        id_usuario: query.usuario,
        fecha_inicio: Date(query.fecha_inicio),
        fecha_fin: Date(query.fecha_fin)
    };
    var query = connection.query('INSERT INTO proyecto SET ?', newProyecto, function (error, results, fields) {
        if (error) return res.status(500).send({msg:"internal error"})
        res.status(200).send({ results })
    });
}
module.exports = {
    get,
    creat
};