// 2、使用 Node 创建 Web 客户端
// 客户端向服务端发起请求，然后处理响应
// 要成功运行此客户端程序 node client.js；需要先运行此文件夹中的服务端 server.js.否则会报错，运行这里的客户端就相当于在浏览器中打开http://127.0.0.1:8080/index.html发起请求。只不过这里是打印在终端，后者是打印在浏览器上，且通过渲染引擎将html文件渲染成页面。
var http = require('http');
 
// 用于请求的选项
var options = {
   host: 'localhost',
   port: '8080',
   path: '/index.html'  
};
 
// 处理响应的回调函数
var callback = function(response){
   // 不断更新数据
   var body = '';
   response.on('data', function(data) {
      body += data;
   });
   
   response.on('end', function() {
      // 数据接收完成
      console.log(body);
   });
}
// 向服务端发送请求
var req = http.request(options, callback);
req.end();