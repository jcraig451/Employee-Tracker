var mysql = require("mysql");
var inquirer = require("inquirer");
var cTable = require("console.table");

var connection = mysql.createConnection({
  host: "localhost",

  // Your port; if not 3306
  port: 3306,

  // Your username
  user: "root",

  // Your password
  password: "Bradford321*",
  database: "employeeTracker_DB"
});

connection.connect(function (err) {
  if (err) throw err;
  runSearch();
});

function runSearch() {
  inquirer
    .prompt({
      name: "action",
      type: "list",
      message: "What would you like to do?",
      choices: [
        "View ALL Employees",
        "View ALL Employees By Department",
        "View ALL Roles",
        // BONUS
        // "View ALL Employees By Manager",
        "Add Employee",
        "Remove Employee",
        "Update Employee Role",
        // BONUS
        // "Update Employee Manager",
        "Exit"
      ]
    })
    .then(function (answer) {
      switch (answer.action) {
        case "View ALL Employees":
          viewAllSearch();
          break;

        case "View ALL Employees By Department":
          departmentSearch();
          break;

        case "View ALL Roles":
          roleSearch();
          break;

        // BONUS

        // case "View ALL Employees By Manager":
        //   managerSearch();
        //   break;

        case "Add Employee":
          addEmployee();
          break;

        case "Remove Employee":
          removeEmployee();
          break;

        case "Update Employee Role":
          updateEmployee();
          break;

        // BONUS

        // case "Update Employee Manager":
        //   updateManager();
        //   break;

        case "Exit":
          connection.end();
          break;
      }
    });
}

function viewAllSearch() {
  var query = 'SELECT e.id, e.first_name, e.last_name, r.title, dp.name AS department, r.salary, mng.first_name AS manager FROM employee AS e ';
  query += 'LEFT JOIN employee AS mng ON e.manager_id = mng.id ';
  query += 'INNER JOIN role AS r ON e.role_id = r.id ';
  query += 'INNER JOIN department AS dp ON r.department_id = dp.id ';
  query += 'ORDER BY e.id';
  connection.query(query, function (err, res) {
    if (err) throw err;
    console.table(res);
    runSearch();
  });
};

function departmentSearch() {
  var query = "SELECT * FROM department";
  connection.query(query, function (err, res) {
    if (err) throw err;
    inquirer
      .prompt({
        name: "dp",
        type: "list",
        message: "Select Department to view?",
        choices: res
      })
      .then(function (answer) {
        var query = 'SELECT e.id, e.first_name, e.last_name, r.title, dp.name AS department, r.salary, mng.first_name AS manager FROM employee AS e ';
        query += 'LEFT JOIN employee AS mng ON e.manager_id = mng.id ';
        query += 'INNER JOIN role AS r ON e.role_id = r.id ';
        query += 'INNER JOIN department AS dp ON r.department_id = dp.id ';
        query += 'WHERE ? ORDER BY e.id';
        connection.query(query, { name: answer.dp }, function (err, res) {
          if (err) throw err;
          console.table(res);
          runSearch();
        });
      });
  })
};

function roleSearch() {
  var query = "SELECT title, salary FROM role";
  connection.query(query, function (err, res) {
    if (err) throw err;
    console.table(res);
    runSearch();
  });
};

function addEmployee() {
  var query = "SELECT title FROM role";
  connection.query(query, function (err, res) {
    if (err) throw err;
    inquirer
      .prompt([{
        name: "addFirstName",
        type: "input",
        message: "New Employee's First Name?"
      },{
          name: "addLastName",
          type: "input",
          message: "New Employee's Last Name?"
        },{
          name: "newEplRole",
          type: "list",
          message: "New Employee's Title?",
          choices: res
        }]);
  })
}

// COME BACK TO IF TIME ALLOWS
// BONUS

// function managerSearch() {
//   var query = "SELECT first_name FROM employee";
//   connection.query( query, function(err, res){
//     if (err) throw err;
//     inquirer
//     .prompt({
//       name: "manager",
//       type: "list",
//       message: "Select Manager to view Employee's they Manage?",
//       choices: res
//     })
//     .then(function(answer){
//     var query = 'SELECT e.id, e.first_name, e.last_name, r.title, dp.name AS department, r.salary, mng.first_name AS manager FROM employee AS e ';
//     query += 'LEFT JOIN employee AS mng ON e.manager_id = mng.id ';
//     query += 'INNER JOIN role AS r ON e.role_id = r.id ';
//     query += 'INNER JOIN department AS dp ON r.department_id = dp.id ';
//     query += 'WHERE ? ORDER BY e.id';
//     connection.query(query, {name: answer.manager}, function (err, res) {
//       if (err) throw err;
//       console.table(res);
//       runSearch();
//     });
//     });
//   })
// };


