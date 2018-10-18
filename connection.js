const mysql = require('mysql');

export default mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'cortes'
});