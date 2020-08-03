const assert = require('assert');

/**
 * --- 问题描述 ---
 *
 * 实现一个 arrange 函数，可以进行时间和工作调度
 *
 * --- 说明 ---
 *
 * - 本题需要自己实现测试用例
 * - 具体功能参考下列示例
 * - 在示例中调用到的方法都需要实现
 * - 下面示例中 `>` 表示在控制台中输出 (console.log)
 *
 * --- 示例 ---
 *
 * 示例一:
 * `arrange('William').execute();`
 * > William is notified
 *
 * 示例二:
 * `arrange('William').wait(5).do('commit').execute();`
 * > William is notified
 * 等待 5s...
 * > Start to commit
 *
 * 示例三:
 * `arrange('William').waitFirst(3).do('push').execute();`
 * 等待 3s...
 * > William is notified
 * > Start to push
 *
 */

function arrange() {}

/*******测试部分*******/
module.exports = function doTest() {};
