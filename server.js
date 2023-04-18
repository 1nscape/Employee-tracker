const inquirer = require('inquirer');
const mysql2 = require('mysql2');
const consoleTable = require('console.table');


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
    password: 'maxmax123123',
    database: 'employeesTracker_db'
})


function userChoice() {
    inquirer.prompt({
        name: "choice",
        type: "list",
        message: "Please choose one of the following",
        choices: [
            promptMessage.viewDeparments,
            promptMessage.viewRoles,
            promptMessage.viewEmployees,
            promptMessage.addDepartment,
            promptMessage.addRole,
            promptMessage.addEmployee,
            promptMessage.updateEmployeeRole,
        ]
    })
            .then(data => {
                switch (data.choice) {
                    case promptMessage.viewDeparments:
                        viewDeparments();
                        break;


                    case promptMessage.viewRoles:
                        viewRoles();
                        break;

                    case promptMessage.viewEmployees:
                        viewEmployees();
                        break;

                    case promptMessage.addDepartment:
                        addDepartment();
                        break;

                    case promptMessage.addRole:
                        addRole();
                        break;

                    case promptMessage.addEmployee:
                        addEmployee();
                        break;

                    case promptMessage.updateEmployeeRole:
                        updateEmployeeRole();
                        break;



                }

            })
    

};

userChoice();


function viewDeparments() {
    const queryData = `SELECT department.name, role.title, employee.first_name, employee.last_name, employee.id FROM employee LEFT JOIN department ON (department.id = role.department_id) LEFT JOIN role ON (role.id = employee.role_id) ORDER BY department.name;`;
    connectionSQL.query(queryData, (err, res) => {
        if (err) throw err;
        console.log('EMPLOYEE BY DEPARTMENT');
        consoleTable(res);
        userChoice();
    });
}

function viewEmployees() {
    const queryData = 'SELECT employee.id, employee.first_name, employee.last_name, role.title, role.salary, department.name FROM employee LEFT JOIN department ON (department.id = role.department_id) LEFT JOIN role ON (role.id = employee.role_id) ORDER BY employee.id'
    connectionSQL.query(queryData, (err, res) => {
        if (err) throw err; 
        console.log('VIEW EMPLOYEES');
        consoleTable(res);
        userChoice();
    });

}


function viewRoles() {
    const queryData = 'SELECT role.title, role.salary, department.name, employee.first_name, employee.last_name FROM employee, LEFT JOIN role ON (role.id = emplopyee.role_id) LEFT JOIN department ON (department.id = role.department.id) ORDER BY role.title'
    connectionSQL.query(queryData, (err, res) => {
        if (err) throw err; 
        console.log('EMPLOYEES BY ROLE');
        consoleTable(res);
        userChoice();
    });
}

function addEmployee() {
   const newEmployee = inquirer.prompt(newEmployeeName);
   connectionSQL.query('SELECT role.id, role.title ORDER BY role.id', (err,res) => {
    if (err) throw err;
    inquirer.prompt((res(roleChoice))); 


   })
}


function newEmployeeName() {
    return ([{
    name: 'first',
    type: 'input',
    message: 'Enter employee first name'

    },
    {
        name: 'last',
        type: 'input',
        message: 'Enter employee last name' 
    }


])
}


function roleChoice() {
    return ([{
        name: 'role',
        type: 'list',
        choices: 'SELECT * FROM role'
    }])
}


module.exports = inquirer


