// 遗留模式如下方法中使用抽象相等（==），最好不用遗留模式，否则可能导致意外结果
// assert.deepEqual()
// assert.equal()
// assert.notDeepEqual()
// assert.notEqual()

const assert = require('assert');
// 注意：这不会抛出 AssertionError！
assert.deepEqual(/a/gi, new Date());

// 抽象的相等性比较（==）会将原始类型视为相等
// 不会抛出 AssertionError。
assert.deepEqual('+00000000', false);