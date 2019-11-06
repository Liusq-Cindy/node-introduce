// 在6中其实已经用到了问卷系统 fs模块。fs 模块提供了一个 API，用于以模仿标准 POSIX 函数的方式与文件系统进行交互。
// 用于各种文件操作
const fs = require('fs');

// 复制文件：默认情况下将创建或覆盖目标文件。
fs.copyFile('1.txt', '2.txt', (err) => {
  if (err) throw err;
  console.log('源文件已拷贝到目标文件');
});