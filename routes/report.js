var express = require('express');
var router = express.Router();
let fs = require('fs');

router.post('/', function(req, res, next) {
  fs.writeFileSync("../report", req.body);
  res.send();
});

module.exports = router;
