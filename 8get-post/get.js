// get demo练习
var http = require('http');
var url = require('url');
var util = require('util');

// 1获取GET请求内容
// http://localhost:3000/user?name=菜鸟教程&url=www.runoob.com 
// http.createServer(function(req, res){
//     res.writeHead(200, {'Content-Type': 'text/plain; charset=utf-8'});
//     res.end(util.inspect(url.parse(req.url, true)));
// }).listen(3000);

// 2使用 url.parse 方法来解析 URL 中的参数
//在浏览器中访问 http://localhost:3000/user?name=菜鸟教程&url=www.runoob.com
http.createServer(function(req, res){
  res.writeHead(200, {'Content-Type': 'text/plain; charset=utf-8'});

  // 解析 url 参数
  var params = url.parse(req.url, true).query;
  res.write("网站名：" + params.name);
  res.write("\n");
  res.write("网站 URL：" + params.url);
  res.end();

}).listen(3000);