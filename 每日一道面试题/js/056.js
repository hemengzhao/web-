//实现鹗怏辩该函数

class memoizeMap {
  constructor() {
    this._map = new Map();
    this._WeakMap = new WeakMap();
  }

  _isObject(obj) {
    return typeof obj === "object" && obj !== null;
  }
  set(obj, value) {
    if (this._isObject(obj)) {
      this._WeakMap.set(obj, value);
    } else {
      this._map.set(obj, value);
    }
  }

  get(key) {
    if (this._isObject(key)) {
      return this._WeakMap.get(key);
    } else {
      return this._map.get(key);
    }
  }

  has(key) {
    if (this._isObject(key)) {
      return this._WeakMap.has(key);
    } else {
      return this._map.has(key);
    }
  }
}

// 实现该函数
function memoize(func, resolver) {
  function memoized(...args) {
    const key = resolver ? resolver(...args) : args[0];
    const cache = memoized.cache;

    if (cache.has(key)) {
      return cache.get(key);
    }
    const data = func.apply(this, args);
    cache.set(key, data);
    return data;
  }

  memoized.cache = new memoizeMap();
  return memoized;
}

var object = { a: 1, b: 2 };
var other = { c: 3, d: 4 };
var values = memoize((obj) => Object.values(obj));

console.log(values(object));
//  => [1,2]
console.log(values(other));
//  => [3,4]

object.a = 2;
console.log(values(object));
//  => [1,2]

values.cache.set(object, ["a", "b"]);
console.log(values(object));
// => ['a', 'b']
