'use strict'

const connection = require('../connection').connection;

function get(req, res) {
    var id = req.query.id;
    var sql = 'SELECT * FROM corte ' + id ? "where id_corte = " + connection.escape(parmas.usuario) : "";
    connection.query(sql, function (error, results) {
        if (error) return res.status(500).send({ error });
        return res.status(200).send({ results })
    });
}
function creat(req, res) {
    var query = req.query;
    if (!query.proyecto && !query.vidrio && !query.altura && !query.anchura) return res.status(400).send({ msg: "bad request" });
    var newPieza = {
        id_proyecto: query.proyecto,
        id_vidrio: query.vidrio,
        altura: query.altura,
        anchura: query.anchura
    };
    var query = connection.query('INSERT INTO corte SET ?', newPieza, function (error, results, fields) {
        if (error) return res.status(500).send({msg:"internal error"})
        res.status(200).send({ results })
    });
}
module.exports = {
    get,
    creat
};