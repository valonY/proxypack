var qs = require('querystring');
delete process.env["DEBUG_FD"];
module.exports = {
    target: 'http://localhost:8082',
    changeOrigin: true,
    // pathRewrite: {
    //     '/api/login': '/proxy/login',
    //     '/api/regist': '/proxy/regist'
    // },
    // router: {
    //     '/login': 'http://localhost:8082/api/login',
    //     '/regist': 'http://localhost:8082/api/regist'
    // },
    onProxyReq: function (proxyReq, req) {
        if(req.method === 'POST') {
        console.log(req);
            var postdata = req.body;
            proxyReq.write(qs.stringify(postdata));
        }
    }
}