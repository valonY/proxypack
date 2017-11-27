var express = require('express');
var bodyParser = require('body-parser');
var router = express.Router();
router.use(bodyParser.json()).
       use(bodyParser.urlencoded({extended: true})).
       use('/login', function (req, res) {
              var body = req.body;
              res.send(body);
              console.log('login');
       }).
       use('/regist', function (req, res) {
              var body = req.body;
              res.send(body);
              console.log('regist');
       });

module.exports = router;