var express = require('express');
var bodyParser = require('body-parser');
var fireproxy = require('../proxy');

var router = express.Router();
delete process.env["DEBUG_FD"];
router.use(bodyParser.json()).
       use(bodyParser.urlencoded({extended: true})).
       use('/' ,fireproxy);
       // use(function (req, res) {
       //     var reqdata = req.body;
       //     console.log(reqdata);
       //      res.json(logindata);
       //  });

module.exports = router;