// 附：自定义高亮设置 快捷键command+shift+p --->  setting首选项 ---- > 自定义todohighlight.keywords
// LOOK:这是module + http + url + events事件模块的综合小demo
// 功能：引入模块，监听events事件触发，接口发送请求时，调用模块中的方法，根据不同路由返回不同数据并记录次数

// 1、引入 http 模块：http 是提供 Web 服务的基础
const http = require("http");

// 2、引入 url 模块：url 是对用户提交的路径进行解析
const url = require("url");

// 3、MAIN:引入模块
// （1）require json.js这个模块
var Rejson = require('./json');
// （2）也可以require hello2这个模块，调用其方法。与上面模块接口的唯一变化是使用 module.exports = Hello 代替了exports.world = function(){}。 在外部引用该模块时，其接口对象就是要输出的对象本身，而不是原先的 exports。

var Rehtml = require('./html'); 
rehtml = new Rehtml(); 

// 4、引入events事件触发监听模块：它有很多功能，比如将this传给监听器，保证只能触发一次，切换异步同步方式，错误事件处理，eventEmitter类等等
const EventEmitter = require('events');
class MyEmitter extends EventEmitter {}
const myEmitter1 = new MyEmitter();
  let m = 0;
  function pong () {
    console.log('http://127.0.0.1:8888/ 页面访问了'+ ++m + '次');
  };
  // 注册一个监听器 .once只处理一次  .on一直会监听
  myEmitter1.on('event', pong);

http.createServer(function (request, response) {
    // 发送 HTTP 头部, HTTP 状态值: 200 : OK, 内容类型: application/json
    response.writeHead(200, {'Content-Type': 'application/json'});
    // 发送响应数据 "Hello World"
    // 解析 url 接口
    let pathName = url.parse(request.url).pathname;
    console.log('请求接口是', pathName);
    // LOOK: 不同接口，返回不同数据
    if (pathName == "/") {
      // 访问一次，触发event事件，知道是第几次访问
      myEmitter1.emit('event');
      // 返回数据
      let res1 = Rejson.getjson();
      let newRes = JSON.parse(JSON.stringify(res1));
      response.write(JSON.stringify({
        code: "1",
        message: "查询成功！",
        data: newRes
      }));
      response.end('Hello,liusq1\n');

    } else if (pathName == "/html") {
      response.writeHead(200, {
        "Content-Type": "text/html;charset=UTF-8"
      });
      // LOOK: 调用模块html.js /rehtml方法，把liusq拼接进去，然后将结果返回
      let words = rehtml.addName('Liusq'); 
      response.write(words);
      response.end();
    }
}).listen(8888);
// 终端打印如下信息
console.log('Server running at http://127.0.0.1:8888/');
// 接下来，打开浏览器访问 http://127.0.0.1:8888/，则会看到一个写着 "Hello， liusq"的网页。