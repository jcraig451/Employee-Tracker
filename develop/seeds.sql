
INSERT INTO department ( name)
VALUES ("Engineering"),
       ("Accounting"),
       ("IT"),
       ("Sales"),
       ("Marketing");

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
       ("Account Manager", 135000, 2);

SELECT title, salary, name
FROM role r INNER JOIN department dp 
ON r.department_id = dp.id;

SELECT first_name, last_name, title, salary
FROM employee emp INNER JOIN role r 
ON emp.role_id = r.id;

SELECT first_name, last_name, title, salary, name
FROM ((employee emp INNER JOIN role r 
ON emp.role_id = r.id)
INNER JOIN department dp 
ON r.department_id = dp.id);