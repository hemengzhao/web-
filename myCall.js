/**
 * @description 手写实现call
 * @param {*} obj  //
 * @param  {...any} args
 */
function myCall(obj, ...args) {
  // 判断 传入obj的类型，如果是null 或 undefined 就赋值为全局this
  //   globalThis 访问全局对象
  obj = obj === null || obj === undefined ? globalThis : Object(obj);

  //  生成唯一的方法key
  const onlyKey = Symbol("key");

  Object.defineProperty(obj, onlyKey, {
    enumerable: false, // 不可枚举
    value: this,
    configurable: true, // 属性是否可以删除或编辑
  });

  //   执行方法获取结果
  const result = obj[onlyKey](...args);
  //   删除方法key
  delete obj[onlyKey];

  //   return 结果
  return result;
}

Function.prototype.myCall = myCall;
var person = {
  fullName: function (age) {
    return this.firstName + " " + this.lastName + " 年龄=> " + age;
  },
};
var person1 = {
  firstName: "Bill",
  lastName: "Gates",
};
person.fullName.myCall(person1, 23);
