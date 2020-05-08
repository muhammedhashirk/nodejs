const router = require('express').Router();
const loginService = require('../service/AuthenticationService');

router.post('/login', loginService.authenticate);

module.exports = router;