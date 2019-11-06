// 一个服务文件
// 具体的http和url见对应的模块
var http = require("http");
var url = require("url");
 
function start1(route) {
  function onRequest(request, response) {
    var pathname = url.parse(request.url).pathname;
    console.log("Request for " + pathname + " received.");
 
    route(pathname);
 
    response.writeHead(200, {"Content-Type": "text/plain"});
    response.write(`Hello World!this is a router test!pathname is ${pathname}`);
    response.end();
  }
 
  http.createServer(onRequest).listen(8888);
  console.log("Server has started.");
}

exports.start1 = start1;