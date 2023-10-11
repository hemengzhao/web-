/***
 * typeOf
 * 可以用来判断基本数据类型， 注意null会被判断为object
 */
console.log("字符串", typeof "12"); // string
console.log("数字", typeof 1); // number
console.log("undefined", typeof undefined); // undefined
console.log("null", typeof null); // object
console.log("布尔值", typeof true); // boolean
console.log(
  "BigInt",
  typeof BigInt("1234567890123456789012345678901234567890")
); // bigint
console.log("Symbol", typeof Symbol(1)); // symbol
console.log("function", typeof function name() {}); // function
console.log("array", typeof []); // object
console.log("object", typeof {}); // object
console.log("Date", typeof new Date()); // object
console.log("Map", typeof new Map()); // object

/***
 * instanceof
 * 可以用来判断引用数据结构
 */

console.log("array", [] instanceof Array); // true
console.log("array", [] instanceof Array); // true
console.log("object", [] instanceof Array); // true
console.log("Date", new Date() instanceof Date); // true
console.log("Map", new Map() instanceof Map); // true

function Person(name) {
  this.name = name;
}
const person = new Person("John");
console.log(person instanceof Person); // 输出 true，person 是 Person 构造函数的实例
console.log(person instanceof Object); // 输出 true，person 也是 Object 构造函数的实例（所有对象都是 Object 的实例）

/***
 * constructor
 * 除了undefined 和 null，其他的数据类型都可以判断
 */
let num = 123;
let obj = {};
console.log(num.constructor == Number); // true
console.log(obj.constructor == Object); // true
console.log([].constructor == Array); // true
console.log(new Date().constructor === Date); // true

/***
 * Object.prototype.toString.call()
 */
let toString = Object.prototype.toString;
toString.call(123); // [object Number]
toString.call("asd"); // [object String]
toString.call({}); // [object Object]
toString.call([]); // [object Array]

// 判断数据类型的方法
function type(data) {
  return Object.prototype.toString.call(data).replace(/\[object\s|\]/g, "");
}
// 总结：

// typeof 操作符
// 优点：
// 简单、快速，可以用于基本数据类型和函数的判断。
// 可以识别大多数基本数据类型，包括数字、字符串、布尔、undefined、function等。
// 限制：
// 对于对象类型（除了函数），返回值都是 "object"，无法准确区分对象的具体类型。
// 不能区分数组和null，都返回 "object"。
// 不能识别自定义对象的具体类型。

// instanceof 运算符
// 优点：
// 可以判断一个对象是否是某个构造函数的实例，较为准确。
// 限制：
// 无法准确判断基本数据类型，只能用于对象和函数的判断。
// 无法跨域iframe，如果对象来自不同的iframe，instanceof 会失效。

// constructor 属性
// 优点：
// 可以通过对象的 constructor 属性来判断对象的构造函数，较为简单。
// 限制：
// constructor 属性可以被改写，不可靠。
// 不能跨域iframe，同 instanceof 一样会失效。

// Object.prototype.toString.call()
// 优点：
// 可以准确判断所有数据类型，包括基本数据类型、内置对象、自定义对象等。
// 不受限于对象的原型链和跨域等问题，适用于多种场景。
// 限制：
// 语法稍显复杂，需要使用 Object.prototype.toString.call()，不如 typeof 和 instanceof 直接。
