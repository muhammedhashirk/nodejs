const router = require('express').Router();
const loginService = require('../service/AuthenticationService');

router.post('/login', loginService.authenticate);

router.post('/forgotPassword', loginService.forgotPassword);

module.exports = router;