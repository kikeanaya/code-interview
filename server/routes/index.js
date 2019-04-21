var express = require('express');
var router = express.Router();
const phoneList = require('../phones.json')

router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
})

router.get('/phones', function(req, res, next) {
  res.send(phoneList)
})

module.exports = router