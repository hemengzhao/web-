async function async1() {
  console.log("async1 start");
  let res = await async2();
  console.log(res);
  console.log("async1 end");
}

async function async2() {
  console.log("async2 start");
  return "async2 end";
}

console.log("script start");
setTimeout(() => {
  console.log("setTimeout");
}, 0);
async1();
new Promise((resolve, reject) => {
  console.log("Promise start");
  resolve();
}).then(() => {
  console.log("Promise end");
});
console.log("script end");

//   运行结果

// script start
// async1 start
// async2 start
// Promise start
// script end
// async2 end
// async1 end
// Promise end
// setTimeout

console.log(1);
setTimeout(() => {
  console.log(2);
  new Promise((resolve, reject) => {
    console.log(3);
    resolve(4);
  }).then((res) => {
    console.log(res);
  });
}, 0);
new Promise((resolve, reject) => {
  console.log(5);
  resolve();
})
  .then(() => {
    console.log(6);
    setTimeout(() => {
      console.log(7);
    });
    return Promise.resolve(8);
  })
  .then((res) => {
    console.log(res);
  });
console.log(9);

// 执行结果
// 1
// 5
// 9
// 6
// 8
// 2
// 3
// 4
// 7