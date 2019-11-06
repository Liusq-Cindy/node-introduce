// 流（stream）是 Node.js 中处理流式数据的抽象接口。 stream 模块用于构建实现了流接口的对象。

// 1、Node.js 中有四种基本的流类型：
    // Writable - 可写入数据的流（例如 fs.createWriteStream()）。
    // Readable - 可读取数据的流（例如 fs.createReadStream()）。
    // Duplex - 可读又可写的流（例如 net.Socket）。
    // Transform - 在读写过程中可以修改或转换数据的 Duplex 流（例如 zlib.createDeflate()）。

// 2、stream API 的主要目标，特别是 stream.pipe()，是为了限制数据的缓冲到可接受的程度，也就是读写速度不一致的源头与目的地不会压垮内存。

// 3、几乎所有的 Node.js 应用都在某种程度上使用了流，除了这里的fs模块，还有http模块请求响应等等。

// 4、可写流是对数据要被写入的目的地的一种抽象。
    // 可写流的例子包括：
        // 客户端的 HTTP 请求
        // 服务器的 HTTP 响应
        // fs 的写入流
        // zlib 流
        // crypto 流
        // TCP socket
        // 子进程 stdin
        // process.stdout、process.stderr
  // 具体写入的方法控制可见文档

// 5、可读流是对提供数据的来源的一种抽象。
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
  // 具体写入的方法控制可见文档

  // 6、另外还有双向流，如压缩等，具体见文档