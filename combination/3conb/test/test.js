// 这是一个mocha单元测试的内容
// mac 中在命令行输入 npx mocha test.js 可启动单元测试
const assert = require('assert');

const validator = require('../index');
// LOOK:
// describe('整体描述', () => {
//     it('描述语句', () => {
//         assert.strictEqual(validator('正则规则名', 输入值), '期待结果');
//     });
// });

describe('表单校验', () => {
    // describe可嵌套使用，区分多个单元
    describe('【呼吸校验】: 1-100整数', () => {
        // 加入before、after,可以用来实现其他功能
        before(function () {
            console.log('开始');
        });
        after(function () {
            console.log('结束');
        });
        beforeEach(function () {
            console.log('  beforeEach:');
        });
        afterEach(function () {
            console.log('  afterEach.');
        });
        it('呼吸，小数1.2', () => {
            assert.strictEqual(validator('breath', 1.2), 'wrong');
        });
        it('呼吸，小于1不允许', () => {
            assert.strictEqual(validator('breath', 0), 'wrong');
        });
        it('呼吸，大于100不允许', () => {
            assert.strictEqual(validator('breath', 180), 'wrong');
        });
        it('呼吸，负数不允许', () => {
            assert.strictEqual(validator('breath', -1), 'wrong');
        });
        it('呼吸，非数字字符串不允许', () => {
            assert.strictEqual(validator('breath', 'liang'), 'wrong');
        });
        it('呼吸，100整允许', () => {
            assert.strictEqual(validator('breath', 100), '');
        });
        it('呼吸，1允许', () => {
            assert.strictEqual(validator('breath', 1), '');
        });
        it('呼吸，1-100整数允许', () => {
            assert.strictEqual(validator('breath', 13), '');
        });
    });
    describe('【体温校验temperature】: 保留小数点后一位, 范围: 34.0-43.0', () => {
        // 加入before、after,可以用来实现其他功能或显示备注
        before(function () {
            console.log('开始');
        });
        after(function () {
            console.log('结束');
        });
        beforeEach(function () {
            console.log('  beforeEach:');
        });
        afterEach(function () {
            console.log('  afterEach.');
        });
        it('体温，两位小数不允许', () => {
            assert.strictEqual(validator('temperature', 41.22), 'wrong');
        });
        it('体温，小于34不允许', () => {
            assert.strictEqual(validator('temperature', 0), 'wrong');
        });
        it('体温，大于43不允许', () => {
            assert.strictEqual(validator('temperature', 180), 'wrong');
        });
        it('体温，34-43两位小数不允许', () => {
            assert.strictEqual(validator('temperature', 38.22), 'wrong');
        });
        it('体温，非数字字符串不允许', () => {
            assert.strictEqual(validator('temperature', 'liang'), 'wrong');
        });
        it('体温，34-43整数允许', () => {
            assert.strictEqual(validator('temperature', 37), '');
        });
        it('体温，34-43一位小数允许', () => {
            assert.strictEqual(validator('temperature', 38.2), '');
        });
        it('体温，34-43两位小数带0允许', () => {
            assert.strictEqual(validator('temperature', 38.20), '');
        });
    });
    // .... 由此可设置完成其他规则的单元测试
});