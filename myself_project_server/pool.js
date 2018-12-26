const mysql = require("mysql");

let pool = mysql.createPool({
    host:"127.0.0.1",
    user:"root",
    password:"",
    port:"3306",
    database:"myProject",
    connectionLimit:10
});

module.exports = pool;