const express = require('express');
const bodyParser = require('body-parser'); 
const mysqlConnection = require('../config/Transaction');
const {createToken} = require('../config/Jwt');

var loginApp = express();
loginApp.use(bodyParser.urlencoded({ extended: true })); 
loginApp.use(bodyParser.json());
loginApp.use(bodyParser.raw());  

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