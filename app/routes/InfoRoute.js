const express = require('express');
const {validateToken} = require('../config/Jwt');
const infoService = require('../service/InfoService');

var infoApp = express(); 

infoApp.get('/listAll', validateToken, infoService.listAllInfo);

infoApp.get('/list/:code', validateToken, infoService.listByCode);


module.exports = infoApp;