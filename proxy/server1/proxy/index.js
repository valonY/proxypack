var proxy = require('http-proxy-middleware');
var config = require('./config');
module.exports = proxy('/api', config);
