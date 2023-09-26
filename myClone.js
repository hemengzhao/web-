/**
 *
 * @param {*} object 深拷贝的对象
 * @param {*} isOwnProperty 是否只拷贝自身属性
 * @param {*} hash
 * @returns
 */
function myDeepClone(object, isOwnProperty = true, hash = new WeakMap()) {
  // 基本数据类型
  if (typeof object !== "object" || object === null) {
    return object;
  }

  if (obj instanceof RegExp) return new RegExp(obj);
  if (obj instanceof Date) return new Date(obj);

  // 如果已存在直接返回  防止循环引用
  if (hash.has(object)) return hash.get(object);

  let newObj = object.constructor();
  hash.set(object, newObj);
  for (const key in object) {
    if (
      (isOwnProperty && Object.hasOwnProperty.call(object, key)) ||
      !isOwnProperty
    ) {
      newObj[key] = myDeepClone(object[key], isOwnProperty, hash);
    }
  }
  return newObj;
}

let obj = {
  arr: [
    1,
    2,
    3,
    {
      name: "111",
    },
  ],
  str: "asdsf",
  number: 1234,
};

obj.children = obj;

const aa = myDeepClone(obj);
