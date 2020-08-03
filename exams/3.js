const assert = require('assert');

/**
 * --- 问题描述 ---
 *
 * 给定一组文件路径，找出它们共同的的父级目录
 *
 * --- 说明 ---
 *
 * - 如果不存在共同的父级目录，返回 `null`
 */

function findParentDirectory(paths) {}

/*******测试部分*******/
module.exports = function doTest() {
  try {
    assert.strictEqual(
      findParentDirectory(['/home/admin/vue', '/home/admin/react']),
      '/home/admin'
    );
    assert.strictEqual(
      findParentDirectory([
        '/home/admin/react/src',
        '/home/admin/react',
        '/home/admin/react/src/index.js',
      ]),
      '/home/admin/react'
    );
    assert.strictEqual(findParentDirectory(['/usr/bin', '/etc/config']), null);
    return '通过';
  } catch (err) {
    return '不通过';
  }
};
