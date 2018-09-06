var http = require('http');
// Define The Port Number of Server
var port = 3000;
//Create a function With 2parameters and Descrive the type of Server Content
var myFunction = function(request, response){
  response.writeHead(200, {'content-type':'text/html'});
  response.write("<h1>Welcome Developer This is youe first NodeJs Task</h1>");
  response.end();
};
var server = http.createServer(myFunction);
server.listen(port);
//Write a Message for Display The Port Number of Server Which given into the project Within the variavle ot var port
console.log("Your Server is Working on port no :" +port);
