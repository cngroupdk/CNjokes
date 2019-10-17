var http = require('http');

var server = http.createServer(function(req, res) {
    console.dir(req);
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('Text content');
});

server.listen(3000, '127.0.0.1');
console.log('Node server!');