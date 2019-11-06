// events事件触发监听，还有很多的功能，比如将this传给监听器，保证只能触发一次，切换异步同步方式，错误事件处理，eventEmitter类等等，可根据需要自行查文档取用
const EventEmitter = require('events');

class MyEmitter extends EventEmitter {}

//  1、this 关键词会被指向监听器所绑定的 EventEmitter 实例。
const myEmitter = new MyEmitter();
myEmitter.on('event', function(a, b) {
  console.log(a, b, this, this === myEmitter);
  // 打印:
  //   a b MyEmitter {
  //     domain: null,
  //     _events: { event: [Function] },
  //     _eventsCount: 1,
  //     _maxListeners: undefined } true
});
myEmitter.emit('event', 'a', 'b');

// 2、只处理一次 .once
const myEmitter2 = new MyEmitter();
let m = 0;
myEmitter2.once('event', () => {
  console.log(++m);
});
myEmitter2.emit('event');
// 打印: 1
myEmitter2.emit('event');
// 不触发