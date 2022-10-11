"use strict";
exports.__esModule = true;
var mysql2_1 = require("mysql2");
var keys_1 = require("./keys");
var pool = mysql2_1["default"].createConnection(keys_1["default"].database);
pool.connect(function (err) {
    if (err)
        throw err;
    console.log("DB is connected");
});
exports["default"] = pool;
//Creamos conexion a la DB 
/*const pool = mysql.createPool(keys.database);

pool.getConnection()
    .then(connection => {
        pool.releaseConnection(connection);
        console.log('DB is Connected');
    });

export default pool;*/ 
