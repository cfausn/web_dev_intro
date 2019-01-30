const http = require('http');
const port = 3000;


var fs = require('fs');

http.createServer(function (request, response){

  var uri = require('url').parse(request.url).pathname, query;
  if (uri == "/writeup"){
    request.setEncoding("utf8");
    fs.readFile('./writeup.html', function (err, html){
      if (err) throw err;

      response.writeHeader(200, {"Content-Type": "text/html"});
      response.write(html);
      response.end();
      
    });}

  else {
    fs.readFile('./index.html', function (err, html){
    if (err) throw err;
    response.writeHeader(200, {"Content-Type": "text/html"});
    response.write(html);
    response.end();
    
    });}
  
}).listen(port);



/*
fs.readFile('./index.html', function (err, html){
  if (err) throw err;

  http.createServer(function(request, response) {
    response.writeHeader(200, {"Content-Type": "text/html"});
    response.write(html);
    response.end();

  }).listen(port);
}); */
