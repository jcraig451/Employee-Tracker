DROP DATABASE IF EXISTS emplyeeTracker_DB;
CREATE DATABASE emplyeeTracker_DB;

USE emplyeeTracker_DB;

CREATE TABLE department(
  id INT NOT NULL AUTO_INCREMENT,
  name VARCHAR(30) NOT NULL,
  PRIMARY KEY (id)
);

CREATE TABLE role(
  id INT NOT NULL AUTO_INCREMENT,
  title VARCHAR(30) NOT NULL,
  salary DECIMAL(12, 2),
  department_id INT NULL,
  PRIMARY KEY (id)
);

CREATE TABLE employee(
  id INT NOT NULL AUTO_INCREMENT,
  first_name VARCHAR(30) NOT NULL,
  last_name VARCHAR(30) NOT NULL,
  role_id INT NULL,
  manager_id INT NULL,
  PRIMARY KEY (id)
);

-- ### Altering AUTO start increment points for tables.

ALTER TABLE role AUTO_INCREMENT = 20;
ALTER TABLE employee AUTO_INCREMENT = 50;