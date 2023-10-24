/**
 * 实现一个 sleep 函数
 * */
function sleep(time = 1000) {
  return new Promise(function (resolve, reject) {
    setTimeout(() => {
      resolve();
    }, time);
  });
}

// sleep(200).then(() => {
//   // 这里写你的操作
// });

async function example() {
  console.log("start example");
  await sleep(2000);
  console.log("end example");
}
example();
