// 菜鸟教程 events 事件触发器
//  event.js 文件 
// EventEmitter 类、事件触发,两个监听器都会被触发
var events = require('events'); 
var emitter = new events.EventEmitter();  // 创建一个能触发事件的对象 emitter
emitter.on('someEvent', function(arg1, arg2) {  // 注册监听器
    console.log('监听listener1', arg1, arg2); 
}); 
emitter.on('someEvent', function(arg1, arg2) { 
    console.log('监听listener2', arg1+'乐乐乐', arg2+'嘻嘻嘻'); 
}); 
emitter.emit('someEvent', '参数111', '参数222'); // 触发事件