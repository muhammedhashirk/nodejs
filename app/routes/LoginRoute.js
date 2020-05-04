const express = require('express');
const mysqlConnection = require('../config/Transaction');
const {createToken} = require('../config/Jwt');

var loginApp = express();

loginApp.post('/', (req, res) => {
    mysqlConnection.query('select * from user where username = ? and password = ?',
        [req.body.username,req.body.password], (err, user) => {
        if(err)
            console.log(err);
        else{
            const token = createToken(user);
            res.json({
                user : user,
                token : token
            });
        }   
    });
});

module.exports = loginApp;