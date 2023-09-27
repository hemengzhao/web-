// es6导入
// import { generateUniqueRandomArray } from "../utils";

// node环境导入
const { generateUniqueRandomArray } = require("../utils");

/***
 * 冒泡排序
 * @param {Array} arr 需要排序的数组
 */
function bubbleSort(arr) {
  // 前置提取长度，避免在循环中避免多次访问 arr.length
  const len = arr.length;
  if (len < 2) return;
  for (let j = 0; j < len; j++) {
    // 判断循环中有没有发生数据交换
    let isSwapped = false;
    for (let i = 0; i < len - 1 - j; i++) {
      // 如果arr[0] > arr[1], 交换他们的位置
      if (arr[i] > arr[i + 1]) {
        [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
        isSwapped = true;
      }
    }

    // 循环中如果没有发生数据交换，直接终止循环，结束排序
    if (!isSwapped) continue;
  }
}

console.time("总操作");
console.time("生成随机数");
const array = generateUniqueRandomArray(100000, -100, 100000);
console.timeEnd("生成随机数");
console.time("冒泡排序");
bubbleSort(array);
console.timeEnd("冒泡排序");
console.timeEnd("总操作");
console.log("array ====>", array);
