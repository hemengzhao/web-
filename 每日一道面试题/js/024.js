/**
 * JavaScript中执行上下文和执行栈是什么?
 * */
// 执行上下文
// 简单来说，执行上下文就是对javascript代码执行环境的抽象概念。也就是说只要有Javascript代码运行，那么它就一定是运行在执行上下文中。

// 执行上下文的类型分为三种
// 一： 全局执行上下文。 只有一个，浏览器中的全局对象就是window对象，this指向这个全局对象
// 二： 函数执行上下文。存在无数个，只有在函数被调用的时候才会被创建，每次调用函数都会创建一个新的执行上下文
// 三： eval函数执行上下文。指运行在eval函数中的代码，很少用而且不建议使用

// 执行栈
// 执行栈，也叫调用栈，具有 LIFO（后进先出）结构，用于管理执行上下文的顺序。每个执行上下文都会被压入栈顶，当当前上下文执行完毕时，会被从栈顶弹出，控制权转移到下一个执行上下文。

function outerFunction() {
  console.log("Outer function");
  innerFunction();
}

function innerFunction() {
  console.log("Inner function");
}

outerFunction();

// 执行过程及执行栈变化：
// 1. 全局执行上下文入栈（main函数）
// 2. 调用 outerFunction，outerFunction 的执行上下文入栈
// 3. 调用 innerFunction，innerFunction 的执行上下文入栈
// 4. innerFunction 执行完毕，其执行上下文出栈
// 5. outerFunction 执行完毕，其执行上下文出栈
// 6. 全局执行上下文出栈，程序结束
