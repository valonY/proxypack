var express = require('express');
var router = require('./router/router');
var app = express();
app.use('/api', router).
    listen(8082, function () {
        console.log('server2 listen in 8082');
    });