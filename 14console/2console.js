// console 类
// 创建具有一个或两个可写流实例的新 Console。 stdout 是一个可写流，用于打印日志或信息输出。 stderr 用于警告或错误输出。 如果未提供 stderr，则 stdout 用于 stderr。
var fs = require("fs");
const { Console } = require('console');
const output = fs.createWriteStream('./stdout.log');
const errorOutput = fs.createWriteStream('./stderr.log');
// 自定义的简单记录器。
const logger = new Console({ stdout: output, stderr: errorOutput });
// 像控制台一样使用它。
const count = 1314;
logger.log('count: %d', count);
// 在 stdout.log 中: count 5
// 另外还有很多其他的用法