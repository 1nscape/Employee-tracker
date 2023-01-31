DROP DATBASE IF EXISTS emloyeesTracker_db;
CREATE DATABASE employeesTracker_db;
USE employeesTracker_db;

CREATE TABLE department (
    id INT AUTO_ICRAMENT PRIMARY KEY,
    name VARCHAR(30)
);

CREATE TABLE role (
    id INT AUTO_ICRAMENT PRIMARY KEY, 
    title VARCHAR(30),
    salary DECIMAL,
    department_id INT, 
);

CREATE TABLE employee (
    id INT AUTO_ICRAMENT PRIMARY KEY,
    first_name VARCHAR (30);
    last_name VARCHAR (30);
    role_id INT,
    mananger_id INT
);
