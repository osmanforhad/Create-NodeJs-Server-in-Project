var http = require('http');
var port = 3000;
var myFunction = function(request, response){
  response.writeHead(200, {'content-type':'text/html'});
  response.write("<h1>Welcome Developer This is youe first NodeJs Task</h1>");
  response.end();
};
var server = http.createServer(myFunction);
server.listen(port);
console.log("Your Server is Working on port no :" +port);