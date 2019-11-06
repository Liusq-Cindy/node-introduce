// 断言有严格模式，严格模式下，都将使用严格函数相等性，例如，assert.deepEqual() 将与 assert.deepStrictEqual() 一样效果。

const assert = require('assert').strict;
assert.deepEqual([[[1, 2, 3]], 4, 5], [[[1, 2, '3']], 4, 5]);
// 会报错3 和‘3’不相等