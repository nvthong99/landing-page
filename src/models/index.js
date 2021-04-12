const mysql = require("mysql");
const mariadb = require("mariadb");
const con = await mariadb.createConnection({
  host: "localhost",
  user: "root",
  password: "123456",
  database: "landing-page",
});

// con.connect(async function (err) {
//   if (err) throw err;

//   console.log("Connected!");
// });

module.exports = con;
