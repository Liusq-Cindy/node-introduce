// 2、返回一个处理过的html
// 有时候我们只是想把一个对象封装到模块中,采用如下模块导出方式
// 定义了一个函数hello2,并把这个函数作为一个模块输出
function Rehtml() {
  var name; 
  this.addName = function(thyName) { 
      name = `<h1 style="text-align:center">你好！${thyName},欢迎来到node的demo练习！</h1><h2 style="text-align:center">详情可见：<a href="https://github.com/LiangJunrong/document-library/blob/master/other-library/Node/NodeBase.md" target="_blank">Node 基础</a></h2>`;
      return name;
  }; 
  // this.sayHello = function() { 
  // }; 
}; 
module.exports = Rehtml;