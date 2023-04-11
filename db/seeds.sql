INSERT INTO department (name)
VALUES ("Engineer"), ("Designer");

INSERT INTO role (title, salary, department_id);
VALUES ("Lead Engineer", 200000, 1 ), ("Junior Engineer", 50000, 1 ), ("Senior Engineer", 100000, 1), ("UX Designer", 80000, 2), ("Lead Designer", 120000, 2)

INSERT INTO employee (first_name, last_name, role_id, mananger_id)
VALUES ("Lebron", "James", 1, null), ("Lionel", "Messi", 2, 1), ("Jon", "Jones", 3, null)