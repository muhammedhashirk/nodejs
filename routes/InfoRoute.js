const express = require('express');
const bodyParser = require('body-parser'); 
const mysqlConnection = require('../config/Transaction');
const {validateToken} = require('../config/Jwt');
const infoService = require('../service/InfoService');

var infoApp = express();
infoApp.use(bodyParser.urlencoded({ extended: true })); 
infoApp.use(bodyParser.json());
infoApp.use(bodyParser.raw());  

infoApp.get('/get', validateToken, infoService.listAllInfo);

module.exports = infoApp;