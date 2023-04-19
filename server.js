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
    database: 'employeesTrackers_db'
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
    const queryData = 'SELECT * FROM department'
    connectionSQL.query(queryData, (err, res) => {
        if (err) throw err;
        console.log('EMPLOYEE BY DEPARTMENT');
        console.table(res);
        userChoice();
    });
    
}


function viewEmployees() {
    const queryData = 'SELECT * FROM employee'
    connectionSQL.query(queryData, (err, res) => {
        //if (err) throw err; 
        console.log('VIEW EMPLOYEES');
        console.table(res);
        userChoice();
    });
   

}


function viewRoles() {
    const queryData = 'SELECT * FROM role'
    connectionSQL.query(queryData, (err, res) => {
        //if (err) throw err; 
        console.log('EMPLOYEES BY ROLE');
       console.table(res);
        userChoice();
    });
}

function addEmployee() {
   
    const newEmployee = inquirer.prompt([{
    
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
.then(data => {
    let something = `INSERT INTO employee (first_name, last_name, role_id) VALUES ("${data.first}", "${data.last}", 1)`;
    connectionSQL.query(something, (err, res) => {
        if (err) throw err;
       console.log('Added employee');
       userChoice();
    })
    
  }) 
}
  

   function addRole() {
    inquirer.prompt([{
    name: 'role',
    type: 'input',
    message: "What's the roles name?"
    
    },
    {
        name:'rolesalary',
        type: 'input',
        message: "What's the salary?"
    },

{
    name: 'roledepartment',
    type:'list',
    message :"What's the roles department?",
    choices: ['Lead Engineer', 'Junior Engineer', 'Senior Engineer', 'UX Designer', 'Lead Designer']
}
]) .then(data => {
    let somethingElse = `INSERT INTO role (title, salary, department_id) VALUES ("${data.role}", "${data.rolesalary}", 1)`
    connectionSQL.query(somethingElse, (err, res) => {
        if (err) throw err;
        console.log('Added role')
        userChoice();
    })
})
   }


   function addDepartment() {
     inquirer.prompt([{
        name: 'departmentName',
        type: 'input',
        message: 'What is the department name?'
    }])
    .then(data => {
        const addDepartment = `INSERT INTO department (name) VALUES ("${data.departmentName}")`
        connectionSQL.query(addDepartment, (err, res) => {
            if (err) throw err;
            console.log('Added role')
            userChoice();
        })
    })
   }
   



module.exports = inquirer