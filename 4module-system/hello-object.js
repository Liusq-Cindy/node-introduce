//hello-object.js 有时候我们只是想把一个对象封装到模块中 
// 定义了一个函数hello2,并把这个函数作为一个模块输出
function Hello2() {
  var name; 
  this.setName = function(thyName) { 
      name = thyName; 
  }; 
  this.sayHello = function() { 
      console.log('Hello ' + name); 
  }; 
}; 
module.exports = Hello2;