let ejs = require('ejs');
let http = require('http');
let path = require('path');

const viewPath = path.join(__dirname, '..', 'views');

http.ServerResponse.prototype.render = async function (filename, data = {}) {
    const renderResult = await ejs.renderFile(path.join(viewPath, filename), data);
    this.writeHead(200, { 'Content-Type': 'text/html', 'Content-Length': renderResult.length });
    this.write(renderResult);
    this.end();
}