delete process.env["DEBUG_FD"];
var express = require('express');

var router = require('./data-router/router');
var app = express();

app.use('/entry', express.static('./www')).
    use('/api', router).
    listen(8088, function () {
        console.log('server1 listen in 8088!');
    });