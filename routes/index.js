var express = require('express');
var router = express.Router();
const authService = require('../services/auth');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', 
  {
    jwt_provider: process.env.JWT_PROVIDER,
    proctoring_server: process.env.PROCTORING_SERVER
  });
});

router.get('/complete', (req, res) => {
  res.render('complete');
});

router.get('/login', (req, res, next) => {
  let accessToken = authService.login();
  res.send(accessToken);
});

router.post('/report', function(req, res, next) {
  console.log(req.body, " datas save");
  res.send("datas save");
});

module.exports = router;
