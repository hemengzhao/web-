/**
 * 2623. 记忆函数
 * let callCount = 0;
 * const memoizedFn = memoize(function (a, b) {
 *	 callCount += 1;
 *   return a + b;
 * })
 * memoizedFn(2, 3) // 5
 * memoizedFn(2, 3) // 5
 * console.log(callCount) // 1
 *
 * */

function memoize(fn) {
  let obj = new Map();
  return function (...args) {
    const key = args.join(",");
    if (obj.has(key)) {
      return obj.get(key);
    }
    const value = fn(...args);
    obj.set(key, value);
    return value;
  };
}
