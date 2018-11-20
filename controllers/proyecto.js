'use strict'

const connection = require('../connection').connection;

function get(req, res) {
    var id = req.query.id;
    var id_proyecto = req.query.id_proyecto;
    var sql = 'SELECT proyecto.id_usuario,id_proyecto,fecha_inicio,fecha_fin,nombre,cliente.nombreCliente FROM proyecto INNER JOIN cliente ON proyecto.id_cliente = cliente.id_cliente WHERE proyecto.id_usuario = ' + id 
    if ( id_proyecto){
        sql += ' and id_proyecto ='+ id_proyecto ;
    }
    connection.query(sql, function (error, results) {
        if (error) return res.status(500).send({ error });
        return res.status(200).send({ results })
    });
}
function creat(req, res) {
    var query = req.body;
    if (!query.nombre && !query.cliente && !query.usuario && !query.fecha_inicio && !query.fecha_fin) return res.status(400).send({ msg: "bad request",query });
    var newProyecto = {
        id_cliente: query.cliente,
        id_usuario: query.usuario,
        nombre: query.nombre,
        fecha_inicio: query.fecha_inicio,
        fecha_fin: query.fecha_fin
    };
    var query = connection.query('INSERT INTO proyecto SET ?', newProyecto, function (error, results, fields) {
        if (error) return res.status(500).send({msg:"internal error",error})
        res.status(200).send({ results })
    });
}
function lamina(req,res){
    var {name} = req.query;
    console.log(name)
    var imgname = `http://localhost:3977/img/proyecto${name}.jpeg`
    res.status(200).send({img: imgname})
}
function setFormatDate(date){
    const splitDate  = date.split('/');
    const year = splitDate[0];
}
module.exports = {
    get,
    creat,
    lamina
};