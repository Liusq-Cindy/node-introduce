// buffer是在全局作用域下的一个类，不用require引入。它可以简单理解为用于和二进制数据流操作的一个缓冲器，因为js是没有和二进制数据读取和操作机制的

//  Buffer 类的实例类似于从 0 到 255 之间的整数数组
// 创建一个长度为 10、且用零填充的 Buffer。
const buf1 = Buffer.alloc(10);
console.log('buf1', buf1);
// 创建一个长度为 10、且用 0x1 填充的 Buffer。 
const buf2 = Buffer.alloc(10, 1);
console.log('buf2', buf2);

// 创建一个长度为 10、且未初始化的 Buffer。
// 这个方法比调用 Buffer.alloc() 更快，
// 但返回的 Buffer 实例可能包含旧数据，
// 因此需要使用 fill() 或 write() 重写。
const buf3 = Buffer.allocUnsafe(10);
console.log('buf3', buf3);

// 创建一个包含 [0x1, 0x2, 0x3] 的 Buffer。
const buf4 = Buffer.from([1, 2, 3]);
console.log('buf4', buf4);


// 创建一个包含 UTF-8 字节 [0x74, 0xc3, 0xa9, 0x73, 0x74] 的 Buffer。
const buf5 = Buffer.from('tést');
console.log('buf5', buf5);

// 创建一个包含 Latin-1 字节 [0x74, 0xe9, 0x73, 0x74] 的 Buffer。
const buf6 = Buffer.from('tést', 'latin1');
console.log('buf6', buf6);

// Buffer.alloc(size[, fill[, encoding]]) 分配一个大小为 size 字节的新 Buffer。fill 为 用于预填充新 Buffer 的值。默认值: 0。 、
// encoding : 如果 fill 是一个字符串，则这是它的字符编码。默认值: 'utf8'。
const buf = Buffer.alloc(11, 'aGVsbG8gd29ybGQ=', 'base64');
console.log(buf);