const arr = [1, 2, 3, 4, 5, 6];

function mp(item) {
  return new Promise((resolve) => {
    // setTimeout(() => {
    //   resolve(item);
    // }, Math.random() * 1000);
    resolve(item);
  });
}

console.log("1111");
arr.forEach(async (item) => {
  let a = await mp(item);
  console.log("🚀 ~ file: 027.js:12 ~ arr.forEach ~ a:", item, a);
});
console.log("222");

arr.map(async (item) => {
  let a = await mp(item);
  console.log("🚀 ~ file: 027.js:12 ~ arr.map ~ a:", item, a);
});
console.log("3333");

// 运行结果
// 111
// 222
// 333
// "🚀 ~ file: 027.js:12 ~ arr.forEach ~ a:", 1, 1;
// "🚀 ~ file: 027.js:12 ~ arr.forEach ~ a:", 2, 2;
// "🚀 ~ file: 027.js:12 ~ arr.forEach ~ a:", 3, 3;
// "🚀 ~ file: 027.js:12 ~ arr.forEach ~ a:", 4, 4;
// "🚀 ~ file: 027.js:12 ~ arr.forEach ~ a:", 5, 5;

// "🚀 ~ file: 027.js:12 ~ arr.map ~ a:", 1, 1;
// "🚀 ~ file: 027.js:12 ~ arr.map ~ a:", 2, 2;
// "🚀 ~ file: 027.js:12 ~ arr.map ~ a:", 3, 3;
// "🚀 ~ file: 027.js:12 ~ arr.map ~ a:", 4, 4;
// "🚀 ~ file: 027.js:12 ~ arr.map ~ a:", 5, 5;

// setTimeout(() => {
//   resolve(item);
// }, Math.random() * 1000);
//
// 运行结果
// 1111
// 222
// 3333
// 🚀 ~ file: 027.js:12 ~ arr.forEach ~ a: 4 4
// 🚀 ~ file: 027.js:12 ~ arr.forEach ~ a: 1 1
// 🚀 ~ file: 027.js:12 ~ arr.map ~ a: 3 3
// 🚀 ~ file: 027.js:12 ~ arr.forEach ~ a: 2 2
// 🚀 ~ file: 027.js:12 ~ arr.forEach ~ a: 5 5
// 🚀 ~ file: 027.js:12 ~ arr.forEach ~ a: 6 6
// 🚀 ~ file: 027.js:12 ~ arr.forEach ~ a: 3 3
// 🚀 ~ file: 027.js:12 ~ arr.map ~ a: 5 5
// 🚀 ~ file: 027.js:12 ~ arr.map ~ a: 6 6
// 🚀 ~ file: 027.js:12 ~ arr.map ~ a: 4 4
// 🚀 ~ file: 027.js:12 ~ arr.map ~ a: 1 1
// 🚀 ~ file: 027.js:12 ~ arr.map ~ a: 2 2

// 在foreach 和 map 遍历数组中使用async/await 运行结果并非预期中的一样
