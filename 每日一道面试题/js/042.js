/**
 * 判断对象为空
 * */

// Object.keys() 静态方法返回一个由给定对象自身的可枚举的字符串键属性名组成的数组。
function objectEmpty1(obj) {
  return Object.keys(obj).length === 0;
}

// Object.getOwnPropertyNames() 静态方法返回一个数组，其包含给定对象中所有自有属性（包括不可枚举属性，但不包括使用 symbol 值作为名称的属性）
function objectEmpty2(obj) {
  return Object.getOwnPropertyNames(obj).length === 0;
}

// hasOwnProperty 判断属性是否是自身的
function objectEmpty3(obj) {
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      return false;
    }
  }
  return true;
}

// let obj1 = {};
// console.log("🚀 ~ file: 042.js:24 ~ objectEmpty1:", objectEmpty1(obj1));
// console.log("🚀 ~ file: 042.js:24 ~ objectEmpty2:", objectEmpty2(obj1));
// console.log("🚀 ~ file: 042.js:24 ~ objectEmpty3:", objectEmpty3(obj1));

// let prototypeObject = { a: "1" };
// let obj2 = Object.create(prototypeObject);
// console.log("🚀 ~ file: 042.js:24 ~ objectEmpty1:", objectEmpty1(obj2));
// console.log("🚀 ~ file: 042.js:24 ~ objectEmpty2:", objectEmpty2(obj2));
// console.log("🚀 ~ file: 042.js:24 ~ objectEmpty3:", objectEmpty3(obj2));

// let obj3 = {};
// Object.defineProperty(obj3, "a", {
//   value: 3,
//   enumerable: false,
// });
// console.log("🚀 ~ file: 042.js:24 ~ objectEmpty1:", objectEmpty1(obj3));
// console.log("🚀 ~ file: 042.js:24 ~ objectEmpty2:", objectEmpty2(obj3));
// console.log("🚀 ~ file: 042.js:24 ~ objectEmpty3:", objectEmpty3(obj3));

let obj4 = {
  [Symbol(1)]: "1",
};

console.log("🚀 ~ file: 042.js:24 ~ objectEmpty1:", objectEmpty1(obj4));
console.log("🚀 ~ file: 042.js:24 ~ objectEmpty2:", objectEmpty2(obj4));
console.log("🚀 ~ file: 042.js:24 ~ objectEmpty3:", objectEmpty3(obj4));
