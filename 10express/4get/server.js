// express 中的get方法
// 表单中通过 GET 方法提交两个参数，我们可以使用 server.js 文件内的 process_get 路由器来处理输入：
// 浏览器访问 http://127.0.0.1:8081/index.htm
var express = require('express');
var app = express();
 
app.use(express.static('public'));
 
app.get('/index.htm', function (req, res) {
   res.sendFile( __dirname + "/" + "index.htm" );
})
 
app.get('/process_get', function (req, res) {
 
   // 输出 JSON 格式
   var response = {
       "first_name":req.query.first_name,
       "last_name":req.query.last_name
   };
   console.log(response);
   res.end(JSON.stringify(response));
})
 
var server = app.listen(8081, '127.0.0.1', function () {
 
  var host = server.address().address
  var port = server.address().port
 
  console.log("应用实例，访问地址为 http://%s:%s", host, port)
 
})