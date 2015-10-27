var express = require('express');
var router = express.Router();
var db = require('monk')('localhost/one-hour-crud');
var Planets = db.get('planets');

router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.

module.exports = router;
