const db = require('./db/connection');
const inquirer = require('inquirer');
const cTable = require('console.table');
let rolesArr = [];
const start = function(){
    inquirer.prompt({
        type: 'checkbox',
        name: 'input',
        message: 'What would you like to do?',
        choices: ['View all Departments', 'View all roles', 'View all employees', 'Add department', 'Add role', 'Add employee', 'Update employee']
    })
    .then(data => {
        let info = data.input.join();
        if(info === 'View all Departments'){
            viewDep();
        } else if (info === 'View all roles'){
            viewRole();
        } else if (info === 'View all employees'){
            viewEmp();
        } else if (info === 'Add department'){
            addDep();
        } else if (info === 'Add role'){
            addRole();
        } else if (info === 'Add employee'){
            addEmp();
        } else if (info === 'Update employee'){
            updateEmp();
        }
    })
}

const viewEmp = function(){
    const sql = `SELECT employee.id, employee.first_name, employee.last_name, roles.title, department.label AS department,
                    roles.salary, CONCAT(manager.first_name, " ", manager.last_name) AS manager
                FROM employee
                    LEFT JOIN roles ON employee.role_id = roles.id
                    LEFT JOIN department ON roles.department_id = department.id
                    LEFT JOIN employee manager ON employee.manager_id = manager.id `;
    db.query(sql, (err, rows) => {
        if(err){
            console.log(err);
            return;
        }
        console.table(rows);
        start()
    })
}
const viewRole = function(){
    const sql = `SELECT roles.id, roles.title, department.label AS department FROM roles
                INNER JOIN department ON roles.department_id = department.id`;
    db.query(sql, (err, rows) => {
        if(err){
            console.log(err);
            return;
        }
        console.table(rows);
        start();
    })
}
const viewDep = function(){
    const sql = `SELECT * FROM department`;
    db.query(sql, (err, rows) => {
        if(err){
            console.log(err);
            return;
        }
        console.table(rows);
        start();
    })
}

const addEmp = function(){
    inquirer.prompt([
        {
          type: 'text',
          name: 'firstName',
          message: 'What is their first name?'  
        },
        {
            type: 'text',
            name: 'lastName',
            message: 'What is their last name?',
        },
        {
            type: 'input',
            name: 'manID',
            message: 'What is their managers ID?'
        },
        {
            type: 'input',
            name: 'roleID',
            message: 'What is their role id'
        }
    ])
    .then(data => {
        const sql = `INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES (?,?,?,?)`;
        const params = [data.firstName, data.lastName, data.roleID, data.manID];
        db.query(sql, params, (err) => {
            if(err){
                console.log(err);
                return;
            }
            console.log('Your employee has been added!');
            start();
        })
    })
}
const addDep = function(){
    inquirer.prompt({
        type: 'text',
        name: 'deptName',
        message: 'What is the name of the Department'
    })
    .then(data => {
        const sql = `INSERT INTO department (label) VALUES (?)`;
        const params = data.deptName;
        db.query(sql, params, (err) => {
            if(err){
                console.log(err);
                return;
            }
            console.log('Your department has been added!');
            start();
        })
    })
}
const addRole = function(){
    inquirer.prompt([
        {
            type: 'text',
            name: 'roleName',
            message: 'What is the title of the role?'
        },
        {
            type: 'input',
            name: 'salary',
            message: 'What is the salary with this role?'
        },
        {
            type: 'input',
            name: 'deptID',
            message: 'What is the department ID?'
        }
    ])
    .then(data => {
        const sql = `INSERT INTO roles (title, salary, department_id) VALUES (?,?,?)`;
        const params = [data.roleName, data.salary, data.deptID];
        db.query(sql, params, (err) => {
            if(err){
                console.log(err);
                return
            }
            console.log('Your new role has been added');
            start();
        })
    })
}
const updateEmp = function() {
    inquirer.prompt([
        {
            type: 'input',
            name: 'id',
            message: 'What is the Employees ID'
        },
        {
            type: 'input',
            name: 'newRole',
            message: 'What is the id of their new role'
        }
    ])
    .then(data => {
        const sql = `UPDATE employee SET role_id = ? WHERE id = ?`;
        const params = [data.newRole, data.id];
        db.query(sql, params, (err) => {
            if(err){
                console.log(err)
                return;
            }
            console.log('Your employees role has been updated');
            start();
        })
    })
}
start();