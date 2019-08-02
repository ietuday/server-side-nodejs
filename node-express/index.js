var express = require('express');
var http = require('http');

var hostname = 'localhost';
var port = 3000;

var app = express();

app.use(function(req, res, next){
    console.log(req.headers);
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    res.end('<html><body><h1>This is an express server</h1></body></html>');
});

var server = http.createServer(app);

server.listen(port, hostname, function(){
    console.log('server running at http://'+ hostname + ':' + port );
     
});