const express = require('express');
const mysql = require('mysql');
const inquirer = require('inquirer');
const cTable = require('console.table');

const app = express();

const PORT = process.env.PORT || 3001;

const db = mysql.createConnection(
    {
        host: 'localhost',
        user: 'root',
        password: 'rootroot',
        database: 'employee_db'
    },
    console.log(`Connected to the employee_db database.`)
);

function questions() {
    inquirer.prompt([
        {
            type: 'list',
            name: 'choice',
            message: 'What would you like to do?',
            choices: [
                'View All Employees',
                'View All Departments',
                'View All Roles',
                'Add Department',
                'Add Role',
                'Add Employee',
                'Update Employee Role',
                'Exit'
            ],
        },
      ])
  
    .then((answers) => {
        switch (answers.choice) {
            case 'View All Employees':
                viewAllEmployees();
                break;
            case 'View All Departments':
                viewAllDepartments();
                break;
            case 'View All Roles':
                viewAllRoles();
                break;
            case 'Add Department':
                addDepartment();
                break;
            case 'Add Role':
                addRole();
                break;
            case 'Add Employee':
                addEmployee();
                break;
            case 'Update Employee Role':
                updateEmployeeRole();
                break;
            case 'Exit':
                exit();
                break;
        }
    }
    )
}

const viewAllEmployees = () => {
    db.query('SELECT * FROM employee', function (err, results) {
        console.table(results);
        questions();
    });
}

const viewAllDepartments = () => {
    db.query('SELECT * FROM department', function (err, results) {
        console.table(results);
        questions();
    });
}

const viewAllRoles = () => {
    db.query('SELECT * FROM role', function (err, results) {
        console.table(results);
        questions();
    });
}

const addDepartment = () => {
    inquirer.prompt([
        {
            type: 'input',
            name: 'department',
            message: 'What is the name of the department you would like to add?',
        },
      ])
  
    .then((answers) => {
        db.query('INSERT INTO department SET ?', { name: answers.department }, function (err, results) {
            console.log('Department added!');
            questions();
        });
    }
    )
}

const addRole = () => {
    inquirer.prompt([
        {
            type: 'input',
            name: 'role',
            message: 'What is the name of the role you would like to add?',
        },
        {
            type: 'input',
            name: 'salary',
            message: 'What is the salary for this role?',
        },
        {
            type: 'input',
            name: 'department_id',
            message: 'What is the department ID for this role?',
        },
      ])
  
    .then((answers) => {
        db.query('INSERT INTO role SET ?', { title: answers.role, salary: answers.salary, department_id: answers.department_id }, function (err, results) {
            console.log('Role added!');
            questions();
        });
    }
    )
}

const addEmployee = () => {
    inquirer.prompt([
        {
            type: 'input',
            name: 'first_name',
            message: 'What is the first name of the employee you would like to add?',
        },
        {
            type: 'input',
            name: 'last_name',
            message: 'What is the last name of the employee you would like to add?',
        },
        {
            type: 'input',
            name: 'role_id',
            message: 'What is the role ID for this employee?',
        },
        {
            type: 'input',
            name: 'manager_id',
            message: 'What is the manager ID for this employee?',
        },
      ])
  
    .then((answers) => {
        db.query('INSERT INTO employee SET ?', { first_name: answers.first_name, last_name: answers.last_name, role_id: answers.role_id, manager_id: answers.manager_id }, function (err, results) {
            console.log('Employee added!');
            questions();
        });
    }
    )
}

const updateEmployeeRole = () => {
    inquirer.prompt([
        {
            type: 'input',
            name: 'employee_id',
            message: 'What is the ID of the employee you would like to update?',
        },
        {
            type: 'input',
            name: 'role_id',
            message: 'What is the new role ID for this employee?',
        },
      ])
  
    .then((answers) => {
        db.query('UPDATE employee SET role_id = ? WHERE id = ?', [answers.role_id, answers.employee_id], function (err, results) {
            console.log('Employee role updated!');
            questions();
        });
    }
    )
}

const exit = () => {
    console.log('Goodbye!');
    process.exit();
}

questions();

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
}
);



