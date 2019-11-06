// 添加处理静态文件的功能
// 在浏览器中访问 http://127.0.0.1:8081/images/blue.png
var express = require('express');
var app = express();
 
app.use(express.static('public'));
 
app.get('/', function (req, res) {
   res.send('Hello World');
})
 
var server = app.listen(8081, '127.0.0.1', function () {
 
  var host = server.address().address
  var port = server.address().port
 
  console.log("应用实例，访问地址为 http://%s:%s", host, port)
 
})