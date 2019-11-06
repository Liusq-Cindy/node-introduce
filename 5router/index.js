// 路由demo,此为启动文件。目的是把我们的server服务文件，和我们的router路由配置文件整合到一起。server.start(router.route)
var server1 = require("./server");
var router1 = require("./router");
 
server1.start1(router1.route);
// cmd键入node index.js ,然后浏览器访问 http://127.0.0.1:8888/，输出结果