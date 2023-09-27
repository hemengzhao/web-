// es6导入
// import { generateUniqueRandomArray } from "../utils";

// node环境导入
const { generateUniqueRandomArray } = require("../utils");

/***
 * 选择排序
 * @param {Array} arr 需要排序的数组
 */
function selectSort(arr) {
  if (arr.length < 2) return;
  const len = arr.length;

  for (let i = 0; i < len; i++) {
    let minIndex = i;
    for (let j = i + 1; j < len; j++) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j;
      }
    }
    if (minIndex !== i) {
      [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
    }
  }
}

// node环境导出
module.exports = {
  selectSort,
};
