const inquirer = require('inquirer');
const mysql2 = require('mysql2');
const consoleTable= require('console.table');


let promptMessage = {
    viewDeparments: "View All Deparments",
    viewRoles: "View All Roles",
    viewEmployees: "View All Employees",
    addDepartment: "Add Deparment",
    addRole: "Add a Role",
    addEmployee: "Add an Employee",
    updateEmployeeRole: "Update an Employee Role"
}


const connectionSQL = mysql2.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: '',
    database: 'employeesTracker_db' 
})

