// 逐行读取，用于一次一行地读取可读流（例如 process.stdin）中的数据。
// 如下示例，输入之后，及打印出来
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('你如何看待 Node.js 中文网？', (answer) => {
  // TODO：将答案记录在数据库中。
  console.log(`感谢您的宝贵意见：${answer}`);

  rl.close();
});

// 另外readline还有interface类方法下的各种事件，如关闭、空格等可供调用，一级其他方法，具体见文档。