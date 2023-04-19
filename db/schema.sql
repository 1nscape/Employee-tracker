DROP DATABASE IF EXISTS employeesTrackers_db;
CREATE DATABASE employeesTrackers_db;
USE employeesTrackers_db;

CREATE TABLE department (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(30)
);

CREATE TABLE role (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY, 
    title VARCHAR(30),
    salary INT,
    department_id INT,
    foreign key (department_id)
    REFERENCES department(id)
    
);

CREATE TABLE employee (
    id INT AUTO_INCREMENT PRIMARY KEY,
    first_name VARCHAR (30),
    last_name VARCHAR (30),
    role_id INT,
    manager_id INT
    foreign key (role_id)
    REFERENCES role(id)
);

