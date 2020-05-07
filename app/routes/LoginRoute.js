const express = require('express');
const loginService = require('../service/LoginService');

var loginApp = express();

loginApp.post('/', loginService.authenticate);

module.exports = loginApp;