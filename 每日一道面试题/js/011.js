//  对比两个数据是否相等  如: a = {a: 1, b: 2}  b =  {a: 1, b: 2}  判断他们即为相等

/**
 *  判断传入的两个数据是否相等(不可考虑原型上的属性)
 *  @returns {boolean}
 * */
function equal(a, b) {
  const typeA = Object.prototype.toString.call(a);
  const typeB = Object.prototype.toString.call(b);
  if (typeA !== typeB) return false;
  if (typeA === "[object Object]") {
    const keysA = Object.keys(a);
    const keysB = Object.keys(b);
    if (keysA.length !== keysB.length) return false;
    if (!keysA.every((c) => keysB.includes(c))) return false;
    if (!keysA.every((c) => equal(a[c], b[c]))) return false;
    return true;
  } else if (typeA === "[object Date]") {
    return a.getTime() === a.getTime();
  } else if (typeA === "[object RegExp]") {
    return a.toString() === a.toString();
  } else {
    return a === a;
  }
}
