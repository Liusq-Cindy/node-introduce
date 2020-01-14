// LOOK:这是fs + console模块的综合小demo
// 功能：读取input.txt文件内容，补充名字，生成新的文件

// 流（stream）是 Node.js 中处理流式数据的抽象接口。 stream 模块用于构建实现了流接口的对象。

// Node.js 中有四种基本的流类型：
    // Writable - 可写入数据的流（例如 fs.createWriteStream()）。
    // Readable - 可读取数据的流（例如 fs.createReadStream()）。
    // Duplex - 可读又可写的流（例如 net.Socket）。
    // Transform - 在读写过程中可以修改或转换数据的 Duplex 流（例如 zlib.createDeflate()）。

// LOOK:开始
// 第一步：从input.txt中读取数据，存储到data中
var fs = require("fs");
var data = '';
// 创建可读流
var readerStream = fs.createReadStream('input.txt');
var writerStream = fs.createWriteStream('output.txt');

new Promise( (resolve, reject) => {
  // 设置编码为UTF8
  readerStream.setEncoding('UTF8');
  // 处理流事件 --> data, end, and error
  readerStream.on('data', function(chunk){
    data += chunk;
  })
  // MAIN: 一定要在流事件end之后改变promise状态，将data数据传递出去，否则可读流尚未完成，返回是空值
  readerStream.on('end', function(){
    console.log('读取数据：', data);
    // 或：自定义的简单记录器，将打印的内容存储到指定文件中。
    const { Console } = require('console');
    const output = fs.createWriteStream('./stdout.log');
    const errorOutput = fs.createWriteStream('./stderr.log');
    const logger = new Console({ stdout: output, stderr: errorOutput });
    var count = 1;
    logger.log('count: %d', ++count, data);
    resolve(data);
  })
  readerStream.on('error',function(err){
    console.log(err.stack)
  })
// 第二步、将data中的数据补充完全，写入文件中
}).then( data => {
  // 使用 utf8 编码写入数据
  writerStream.write( 'liusq: ' + data,'UTF8');
  // 标记文件末尾
  writerStream.end();
  // 处理流事件 --> data, end, and error
  writerStream.on('finish', function() {
      console.log("文件写入完成。");
  });
  writerStream.on('error', function(err){
    console.log(err.stack);
  });
})

//以上只是为了介绍node的流事件，其实fs有自带的读写操作：fs.readFile fs.writeFile 读写文件  
fs.readFile('input.txt',function(error,data){
  if(error){
      console.log(error);
      return false;
  }
  console.log('fs读取', data.toString());  //读取出所有行的信息  
})

fs.writeFile('123.txt','你好nodejs 覆盖','utf8',function(error){
  if(error){
      console.log(error);
      return false;
  }
  console.log('写入成功');
})

// 几乎所有的 Node.js 应用都在某种程度上使用了流，除了这里的fs模块，还有http模块请求响应等等。

// 可读流是对提供数据的来源的一种抽象。
  // 可读流的例子包括：
    // 客户端的 HTTP 响应
    // 服务器的 HTTP 请求
    // fs 的读取流
    // zlib 流
    // crypto 流
    // TCP socket
    // 子进程 stdout 与 stderr
    // process.stdin
    // 所有可读流都实现了 stream.Readable 类定义的接口。

    // 可写流是对数据要被写入的目的地的一种抽象。
    // 可写流的例子包括：
        // 客户端的 HTTP 请求
        // 服务器的 HTTP 响应
        // fs 的写入流
        // zlib 流
        // crypto 流
        // TCP socket
        // 子进程 stdin
        // process.stdout、process.stderr

  // 另外还有双向流，如压缩等，具体见文档


/* 
 1. fs.stat  检测是文件还是目录(目录 文件是否存在) 
 2. fs.mkdir  创建目录 （创建之前先判断是否存在） 
 3. fs.writeFile  写入文件(文件不存在就创建,但不能创建目录) 
 4. fs.appendFile 写入追加文件 
 5.fs.readFile 读取文件 
 6.fs.readdir 读取目录 
 7.fs.rename 重命名 
 8. fs.rmdir  删除目录 
 9. fs.unlink 删除文件 
*/