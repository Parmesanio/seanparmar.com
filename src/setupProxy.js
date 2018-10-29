const proxy = require('http-proxy-middleware');

module.exports = function(app) {
    app.use(proxy([
        '/admin',
        '/auth',
        '/send',
        '/api'
    ],{ target: 'http://localhost:4000/' }));
}