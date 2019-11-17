//Setup code to connect Node to MySQL
var mysql = require("mysql");

var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "yourRootPassword",
  database: "burgers_db"
});

//JAWSDB
if (process.env.JAWSDB_URL) {
  connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
  connection = mysql.createConnection({
    host: 'kf3k4aywsrp0d2is.cbetxkdyhwsb.us-east-1.rds.amazonaws.com',
    user: 'diosgpxjhx4cjfp3',
    password: 'khwr3kw1sda8nbex',
    database: 'fcte3qncfpr2pkm7'
  });
};

connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

module.exports = connection;
