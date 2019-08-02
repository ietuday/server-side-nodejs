var path = require('path');
var http = require('http');
var fs = require('fs');
var url = require('url');
var bind_port = 8001;
var path = '/home/geeky-uday/projects/server-side-nodejs/1.mp4';
 
http.createServer(function (request, response) {
 var uri = url.parse(request.url).pathname;
 console.log(path);
 console.log(uri);
 var filename = '/home/geeky-uday/projects/server-side-nodejs/1.mp4';
 console.log(filename);
 
 
 fs.exists(filename, function (exists) {
 if (!exists) {
   console.log('404 File Not Found: ' + filename);
   response.writeHead(404, {
     "Content-Type": "text/plain"
   });
   response.write("404 Not Found\n");
   response.end();
   return;
 } else{
   console.log('Starting download: ' + filename);
   var stream = fs.createReadStream(filename, { bufferSize: 64 * 1024 });
   stream.pipe(response);
  }
 });
 
}).listen(bind_port);
console.log('Download Server listening on Port' + bind_port);