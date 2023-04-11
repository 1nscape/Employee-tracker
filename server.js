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
    password: '',
    database: 'employeesTracker_db'
})


function userChoice() {
    userChoice.inquirer({
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
    })

};

userChoice();


function viewDeparments() {
    const queryData = `SELECT department.name, role.title, employee.first_name, employee.last_name, employee.id
    FROM employee
    LEFT JOIN department ON (department.id = role.department_id)
    LEFT JOIN role ON (role.id = employee.role_id)
    ORDER BY department.name;`;
    connection.query(queryData, (err, res) => {
        if (err) throw err;
        console.log('EMPLOYEE BY DEPARTMENT');
        console.table(res);
        userChoice();
    });
}



