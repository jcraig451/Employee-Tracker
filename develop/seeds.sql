
INSERT INTO department ( name)
VALUES ("Engineering"),
       ("Accounting"),
       ("IT"),
       ("Sales"),
       ("Marketing"),
       ("Maintaince");


INSERT INTO role ( title, salary, department_id)
VALUES ("Mechanical Engineer", 70000, 1),
       ("Engineering Manager", 130000, 1),
       ("Inside Sales", 50000, 4),
       ("Outside Sales", 52000, 4),
       ("Sales Manager", 90000, 4),
       ("Jr. UI Developer", 80000, 3),
       ("UI Developer", 70000, 3),
       ("UI Developer Manager", 150000, 3),
       ("Audit Lead", 65000, 2),
       ("Account Manager", 135000, 2),
       ("Janitor", 200000, 6);


INSERT INTO employee( first_name, last_name, role_id, manager_id)
VALUES ("Josh", "Craig", 1, NULL),
        ("John", "Snow", 7, NULL),
        ("Lord", "Farquad", 11, 1),
        ("Joe", "Bob", 11, 1);

SELECT * FROM employee;
SELECT * FROM role;
SELECT * FROM department;
