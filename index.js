const db = require('./db/connection');
const inquire = require('inquire');
const cTable = require('console.table');
const start = function(){
    return inquire.promt({
        type: 'checkbox',
        name: 'input',
        message: 'What would you like to do?',
        choices: ['View all Departments', 'View all roles', 'View all employees', 'Add department', 'Add role', 'Add employee', 'Update employee']
    })
    .then(data => {
        let data = data.input.join();
        if(data === 'View all Departments'){

        } else if (data === 'View all roles'){

        } else if (data === 'View all employees'){

        } else if (data === 'Add department'){

        } else if (data === 'Add role'){

        } else if (data === 'Add employee'){

        } else if (data === 'Update employee'){
            
        }
    })
}