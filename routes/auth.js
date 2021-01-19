const express = require('express');
const router = express.Router();
const authService = require('../services/auth');


router.post('/login', (req, res, next) => {
    let accessToken = authService.login();
    res.send(accessToken);
});

module.exports = router;