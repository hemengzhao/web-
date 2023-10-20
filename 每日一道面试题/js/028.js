/**
 * for for...in for...of 区别
 * */
// for循环时常见的一种循环结构，通常用于遍历数组或者执行一段代码固定次数
for (let i = 0; i < 5; i++) {
  if (i === 3) break;
  console.log("222,", i);
}
// 中断循环方法
// break中断整个循环，后面不在执行
// continue 中断本次循环执行，后面的循环继续
//  break / continue 本次循环中后面代码也不再运行

// for...in 循环用于遍历对象的可枚举属性，它会遍历对象的属性名。
// 通常不用于循环数组，因为它可能会遍历到数组原型链上的属性，可能会导致意外行为。
const person = { name: "John", age: 30 };
for (let key in person) {
  if (key == "age") break;
  console.log(key, person[key]);
}

// for...of是 ES6 新引入的, 循环是用于遍历可迭代对象（如数组、字符串、Map、Set 等），它会遍历对象的值
const numbers = [1, 2, 3, 4, 5];
for (let num of numbers) {
  if (num == 2) break;
  console.log(num);
}

// for 循环通常用于重复执行代码指定次数。
// for...in 循环用于遍历对象的可枚举属性, 遍历的是键名, 不建议遍历数组。
// for...of 循环用于遍历可迭代对象的值， 遍历的是键值。
// 都可以使用break / continue 中断循环
