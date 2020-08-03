const assert = require('assert');

/**
 * --- 问题描述 ---
 *
 * 给出一个数字，找出它是斐波那契数列中的第几个数
 *
 * --- 说明 ---
 *
 * - 斐波那契数列 [1, 1, 2, 3, 5, 8, 13, ...]，后一个数字是前两个数字之和
 * - 输入的数字大于等于 2
 * - 如果输入数字不存于斐波那契数列中，返回 -1
 */

function findFibonacciIndex(n) {}

/*******测试部分*******/
module.exports = function doTest() {
  try {
    assert.strictEqual(findFibonacciIndex(2), 2);
    assert.strictEqual(findFibonacciIndex(13), 6);
    assert.strictEqual(findFibonacciIndex(100), -1);
    return '通过';
  } catch (err) {
    return '不通过';
  }
};
