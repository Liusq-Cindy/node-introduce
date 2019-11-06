// 断言模块  测试，不通过会报出错误
// 断言就是用于测试不变量是否是自己的期待值的一个模块

const assert = require('assert');


// 生成 AssertionError 以便稍后比较错误的消息：
const { message } = new assert.AssertionError({
  actual: 1,
  expected: 2,
  operator: 'strictEqual'
});

// 验证错误的输出：
try {
  assert.strictEqual(1, 2);
} catch (err) {
  // 所有实例都包含内置的 Error 属性（message 和 name）以及：
  assert(err instanceof assert.AssertionError);
  assert.strictEqual(err.message, message); // 信息
  assert.strictEqual(err.name, 'AssertionError'); //错误名称
  assert.strictEqual(err.actual, 1);
  assert.strictEqual(err.expected, 2);
  assert.strictEqual(err.code, 'ERR_ASSERTION'); // 错误码
  assert.strictEqual(err.operator, 'strictEqual'); // 设置为传入的运算符值。
  assert.strictEqual(err.generatedMessage, true); // 表明消息是否是自动生成的
}

assert.notStrictEqual(1, 2);
// 通过。

assert.equal(1, 2, '不会通过断言');

//  不通过，提示： AssertionError [ERR_ASSERTION]: 不会通过断言
assert.notStrictEqual(1, 1);
// AssertionError [ERR_ASSERTION]: Expected "actual" to be strictly unequal to: 1

assert.notStrictEqual(1, '1');
// 通过。