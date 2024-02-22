/**
 * 使字符串能够动态地执行 JavaScript 代码
 * */
var a = 1;
function exec1(code) {
  var a = 2;
  eval(code);
}

function exec2(code) {
  var a = 2;
  setTimeout(code, 0);
}

function exec3(code) {
  var a = 2;
  const script = document.createElement("script");
  script.innerHTML = code;
  document.body.appendChild(script);
}

function exec4(code) {
  var a = 2;
  const fn = new Function(code);
  fn();
}

const strCode = 'console.log("a => ", a)';
exec1(strCode); // a =>  2
exec2(strCode); // a =>  1
exec3(strCode); // a =>  1
exec4(strCode); // a =>  1

// eval         同步 当前作用域
// setTimeout   异步 全局作用域
// script       同步 全局作用域
// Function     同步 全局作用域
