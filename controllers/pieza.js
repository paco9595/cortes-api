'use strict'
    
const connection = require('../connection').connection;

function get(req, res) {
    var id = req.query.id;
    if(!id) return res.status(400).send({msg:'bad request'})
    var sql = 'SELECT pieza.altura,pieza.anchura, vidrio.nombre, vidrio.espesor FROM pieza INNER JOIN vidrio ON vidrio.id_vidrio=pieza.id_vidrio and pieza.id_usuario = ' + id+' ORDER BY vidrio.espesor DESC';
    connection.query(sql, function (error, results) {
        if (error) return res.status(500).send({ error });
        return res.status(200).send({ results })
    });
}
function creat(req, res) {
    var query = req.query;
    if (!query.vidrio && !query.altura && !query.anchura && !query.usuario) return res.status(400).send({ msg: "bad request" });
    var newPieza = {
        id_vidrio: query.vidrio,
        id_usuario: query.usuario,
        altura: query.altura,
        anchura: query.anchura,
    };
    var query = connection.query('INSERT INTO pieza SET ?', newPieza, function (error, results, fields) {
        if (error) return res.status(500).send({msg:"internal error"})
        res.status(200).send({ results })
    });
}
module.exports = {
    get,
    creat
};