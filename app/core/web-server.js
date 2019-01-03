let router = require('aurora-router');
let http = require('http');
let path = require('path');
let fs = require('fs');

require('./router');

http.createServer(function (req, res) {
    router.handle(req, res);
}).listen(8080);

const FAVICO = path.join(__dirname, '..', 'views', 'assets', 'favicon.ico');

router.get('/favicon.ico', (req, res) => {
    res.setHeader('Content-Type', 'image/x-icon');
    fs.createReadStream(FAVICO).pipe(res);
});
