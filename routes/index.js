var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  console.log(typeof process.env.JWT_PROVIDER.toString());
  res.render('index', 
  {
    jwt_provider: process.env.JWT_PROVIDER,
    proctoring_server: process.env.PROCTORING_SERVER
  });
});

module.exports = router;
