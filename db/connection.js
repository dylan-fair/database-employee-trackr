const mysql = require('mysql2');
const db = mysql.createConnection(
    {
        host: 'localhost',
        user: 'root',
        password: '1515',
        database: 'employee'
    },
    console.log('connected to employee database')
)
module.exports = db;