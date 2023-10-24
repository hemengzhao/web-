/**
 * flat() 方法创建一个新的数组，并根据指定深度递归地将所有子数组元素拼接到新的数组中
 * */
function myFlat(deep = 1) {
  const newArr = [];
  function flat(arr, level = 1) {
    arr.forEach((element) => {
      if (element.constructor === Array && level <= deep) {
        flat(element, level + 1);
      } else {
        newArr.push(element);
      }
    });
  }
  flat(this.valueOf());
  return newArr;
}

// chatGPT 优化
// 使用 for...of 循环代替 forEach 循环，因为 for...of 更适合处理数组。
// 使用 const 声明 flatArray，以代替 let，因为它的值不会在函数内部重新赋值。
// 使用 Array.isArray(element) 来检查元素是否是数组，而不是 element.constructor === Array，这更具可读性和通用性。

// function myFlat(deep = 1) {
//   const flatArray = [];
//   function flat(arr, level = 1) {
//     for (const element of arr) {
//       if (Array.isArray(element) && level < deep) {
//         flat(element, level + 1);
//       } else {
//         flatArray.push(element);
//       }
//     }
//   }
//   flat(this.valueOf());
//   return flatArray;
// }

Array.prototype.myFlat = myFlat;

let arr = [
  1,
  [
    2,
    [
      3,
      [
        4,
        [5, [6, [7, [8, [9, [10, [11, [12, [13, [14, [15, [16, 17]]]]]]]]]]]],
      ],
    ],
  ],
];
console.log("🚀 ~ file: 033.js:22 ~ arr:", arr.myFlat(Infinity));
