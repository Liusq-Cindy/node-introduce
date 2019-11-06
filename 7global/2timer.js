// node中有许多的全局对象，比如定时器添加取消等等 ，timer模块
// timer 模块暴露了一个全局的 API，用于预定在将来某个时间段调用的函数。 因为定时器函数是全局变量，所以不需要调用 require('timers') 来使用 API。

// setImmediate()、setInterval() 和 setTimeout() 方法各自返回表示预定的定时器的对象。
// 1、immediate类
  // immediate.hasRef() 
        // 如果为 true，则 Immediate 对象将会使 Node.js 事件循环保持活动状态。
  // immediate.ref() 
        // 调用时，只要 Immediate 处于活动状态，就会请求 Node.js 事件循环不会退出。 多次调用 immediate.ref() 将无效。默认情况下，所有 Immediate 对象都是 ref 的，通常不需要调用 immediate.ref()，除非之前调用了 immediate.unref()。
  // immediate.unref() 
        // 返回: <Immediate> 对 immediate 的引用。调用时，活动的 Immediate 对象不需要 Node.js 事件循环保持活动状态。 如果没有其他活动保持事件循环运行，则进程可以在调用 Immediate 对象的回调之前退出。 多次调用 immediate.unref() 将无效

// 2、 Timeout 类
    // timeout.hasRef()
    // timeout.ref()
    // timeout.refresh()
    // timeout.unref()
console.log('666')
// 3、预定定时器
  // setImmediate(callback[, ...args])  当前队列执行后立即执行
  setImmediate(()=>{
    console.log('777');
  })
  console.log('000');
  // setInterval(callback, delay[, ...args]) 每隔1秒执行一次
  setInterval(()=> {
    console.log('888')
  }, 1000)
  // setTimeout(callback, delay[, ...args]) 1.5秒后执行
  setTimeout(()=> {
    console.log('999')
  }, 1500)
// 4、取消定时器
  // clearImmediate(immediate)
  // clearInterval(timeout)
  // clearTimeout(timeout)

  // 以上输出为 666 ，000， 777， 888， 999， 888， 888， 888