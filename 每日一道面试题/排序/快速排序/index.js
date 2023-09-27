/***
 * 快速排序
 * @param {Array} arr 需要排序的数组
 */
function quickSort(arr) {
  if (arr.length < 2) return arr;
  let left = [],
    right = [];
  const pivot = arr[Math.floor(arr.length / 2)]; // 选择基准元素

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < pivot) {
      left.push(arr[i]);
    } else if (arr[i] > pivot) {
      right.push(arr[i]);
    }
  }

  return quickSort(left).concat([pivot], quickSort(right));
}

// node环境导出
module.exports = {
  quickSort,
};
