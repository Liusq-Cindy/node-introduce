// 模块系统的demo
// require这个hello模块，然后就可以调用其方法world
// node main.js可打印结果
var hello = require('./hello');
hello.world();

// 也可以require hello2这个模块（里面有一个对象，好几个方法），调用其方法。
var Hello2 = require('./hello-object'); 
hello2 = new Hello2(); 
hello2.setName('BYVoid'); 
hello2.sayHello(); 
// 模块接口的唯一变化是使用 module.exports = Hello 代替了exports.world = function(){}。 在外部引用该模块时，其接口对象就是要输出的 Hello 对象本身，而不是原先的 exports。