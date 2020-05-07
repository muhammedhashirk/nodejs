const mysql = require('mysql');

const mysqlConnection = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "root",
    database: "devtable",
    connectionLimit: 10
});

mysqlConnection.getConnection((err) => {
    if(err)
        console.log('Connection failed.');
    else
        console.log('Connected');
});

module.exports = mysqlConnection;
