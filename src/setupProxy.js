const proxy = require('http-proxy-middleware');

module.exports = function(app) {
    app.use(proxy([
        '/admin',
        '/auth',
        '/send'
    ],{ target: 'http://localhost:4000/' }));
}