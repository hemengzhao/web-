Object.prototype[Symbol.iterator] = function () {
  // 使用 Object.values(this) 方法获取对象的所有值，并返回这些值的迭代器对象
  return Object.values(this)[Symbol.iterator]();
};

var [a, b] = { a: 1, b: 2 };

// 解题思路
// https://juejin.cn/post/7346512120639340607?utm_source=gold_browser_extension
