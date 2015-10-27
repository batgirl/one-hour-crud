var express = require('express');
var router = express.Router();
var db = require('monk')('localhost/one-hour-crud');
var Planets = db.get('planets');

router.get('/', function(req, res, next) {
  Planets.find({}, function(err, docs) {
    res.json(docs);
  }
});

router.get('/new', function(req, res, next) {
  res.render()
});

router.post('/new', function(req, res, next) {
  Planets.insert({name: req.body.name}, function(err, doc) {
    res.json(doc);
  })
});

router.get('/:id', function(req, res, next) {
  Planets.findOne({_id: req.params.id}, function(err, doc) {
    res.json(doc);
  })
});

router.get('/:id/edit', function(req, res, next) {
  res.render()
});

router.post('/:id/edit', function(req, res, next) {
  Planets.update({_id: req.params.id}, {name: req.body.name}, function(err, doc) {
    res.json(doc);
  })
});

router.post('/:id/delete', function(req, res, next) {
  Planets.remove({_id: req.params.id}, function(err, doc) {
    res.redirect('/');
  })
})

module.exports = router;
