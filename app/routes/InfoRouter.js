const router = require('express').Router();
const {validateToken} = require('../config/Jwt');
const infoService = require('../service/InfoService');

router.get('/listAll', validateToken, infoService.listAllInfo);

router.get('/list/:code', validateToken, infoService.listByCode);

module.exports = router;