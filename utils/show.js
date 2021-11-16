const db = require('../db/connection');
const start = require('../index');
const cTable = require('console.table');
const viewEmp = function(){
    const sql = `SELECT * FROM employee`;
    db.query(sql, (err, rows) => {
        if(err){
            return;
        }
        cTable(rows);
        start()
    })
}