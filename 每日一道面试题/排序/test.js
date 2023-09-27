const { generateUniqueRandomArray } = require("./utils");
const { bubbleSort } = require("./冒泡排序/index");
const { selectSort } = require("./选择排序/index");
const { insertionSort, insertionSortBifurcate } = require("./插入排序/index");
const { quickSort } = require("./快速排序/index");

console.time("总操作");
console.time("生成随机数");
const array = generateUniqueRandomArray(1000000, -100000, 1000000);
console.timeEnd("生成随机数");

const bubbleSortArr = JSON.parse(JSON.stringify(array));
console.time("冒泡排序");
bubbleSort(bubbleSortArr);
console.timeEnd("冒泡排序");

const selectSortArr = JSON.parse(JSON.stringify(array));
console.time("选择排序");
selectSort(selectSortArr);
console.timeEnd("选择排序");

const insertionSortArr = JSON.parse(JSON.stringify(array));
console.time("插入排序");
insertionSort(insertionSortArr);
console.timeEnd("插入排序");

// const insertionSortBifurcateArr = JSON.parse(JSON.stringify(array));
// console.time("插入排序 二叉分查");
// insertionSortBifurcate(insertionSortBifurcateArr);
// console.timeEnd("插入排序 二叉分查");

// const quickSortArr = JSON.parse(JSON.stringify(array));
// console.time("快速排序");
// const arr = quickSort(quickSortArr);
// console.timeEnd("快速排序");

console.timeEnd("总操作");
