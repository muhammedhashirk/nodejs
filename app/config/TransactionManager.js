const mysql = require('mysql');

const config = require('./Config');

const connectionPool = mysql.createPool(config.dbConfig);

connectionPool.getConnection((err) => {
    if(err)
        throw err
    else
        console.log('Successfully connected to database.');
});

module.exports = connectionPool;