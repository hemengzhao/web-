// 手写实现new
/**
 * new 的时候做了什么
 * 1. 创建一个新的对象
 * 2. 改变构造函数的this指向新的对象
 * 3. 将新对象的原型空间与构造函数的原型空间相连接
 * 4. 对有返回值的构造函数做判断处理  如果返回值是一个object类型，则返回这个结果，否则返回这个新创建的对象
 */
function myNew(fn, ...args) {
  const newObj = {};

  const result = fn.apply(newObj, args);

  Object.setPrototypeOf(newObj, fn.prototype);

  return result instanceof Object ? result : newObj;
}
