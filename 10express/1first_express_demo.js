// 第一个 Express 框架实例
// 此前，要安装express和几个重要模块，详见https://www.runoob.com/nodejs/nodejs-express-framework.html
// 以下实例中我们引入了 express 模块，并在客户端发起请求后，响应 "Hello World" 字符串。
//express_demo.js 文件
var express = require('express');
var app = express();
// Express 应用使用回调函数的参数： request 和 response 对象来处理请求和响应的数据。
// res.send()：传送HTTP响应
app.get('/', function (req, res) {
   res.send('Hello World');
})
 
var server = app.listen(8081, '127.0.0.1', function () {
 
  var host = server.address().address
  var port = server.address().port
 
  console.log("应用实例，访问地址为 http://%s:%s", host, port)
 
})