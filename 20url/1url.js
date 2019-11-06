// url 模块用于处理与解析 URL。 使用方法如下：
const url = require('url');

// 1、url字符串是结构化的字符串，解析字符串后返回的是url对象，每个属性对应各个组成部分
const lsq = "  https:   //    user   :   pass   @ sub.example.com : 8080   /p/a/t/h  ?  query=string   #hash "
console.log('lsq', lsq);
   // 解析字符串的方式有两种，一种是url.parse,一种是新的new URL的方式
  // （1）、旧的，需要require
  const url = require('url');
  const myURL =
    url.parse('https://user:pass@sub.host.com:8080/p/a/t/h?query=string#hash');
  // （2）、新的，如下直接new URL
// 2、url类，包含很多获取url参数的方法，如下，具体可查阅文档
const myURL = new URL('https://example.org/foo#bar');
console.log(myURL.hash);
  // 打印 #bar

console.log(myURL.host);
// 打印 example.org

myURL.hash = 'baz';
console.log(myURL.href);
  // 打印 https://example.org/foo#baz

const myURL2 = new URL('https://abc:xyz@example.com');
console.log(myURL2.password);
  // 打印 xyz 密码