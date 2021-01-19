const express = require('express');
const router = express.Router();
//const authService = require('../services/auth');

router.get('/', (req, res, next) => {
    res.render('testing');
});

module.exports = router;