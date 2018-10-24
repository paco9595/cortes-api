const mysql = require('mysql');
connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'cortes'
});

module.exports = {
    connection
}