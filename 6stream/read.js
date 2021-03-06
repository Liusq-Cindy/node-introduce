// node 的 stream流操作demo
// 所有的 Stream 对象都是 EventEmitter 的实例。常用的事件有：
// data - 当有数据可读时触发。
// end - 没有更多的数据可读时触发。
// error - 在接收和写入过程中发生错误时触发。
// finish - 所有数据已被写入到底层系统时触发。

// 1 从流中读取数据，熊input.txt中读取数据
var fs = require("fs");
var data = '';
// 创建可读流
var readerStream = fs.createReadStream('input.txt');
// 设置编码为UTF8
readerStream.setEncoding('UTF8');
// 处理流事件 --> data, end, and error
readerStream.on('data', function(chunk){
  data += chunk;
})
readerStream.on('end', function(){
  console.log('显示', data);
})
readerStream.on('error',function(err){
  console.log(err.stack)
})
console.log('读取文件执行完毕')
