/**
 *
 * */
var a = 10;
(function () {
  console.log(a);
  a = 5;
  console.log(globalThis.a);
  var a = 20;
  console.log(a);
})();

// 浏览器环境 输出结果
// undefined
// 10
// 20

// globalThis 是一个在现代 JavaScript 环境中引入的全局对象，它提供了一种跨平台、跨环境的访问全局对象的标准方式
// 在window环境下指向window， node环境下指向global
