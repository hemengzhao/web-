/***
 * 插入排序
 * @param {Array} arr 需要排序的数组
 */
function insertionSort(arr) {
  if (arr.length < 2) return;
  const len = arr.length;
  for (let i = 1; i < len; i++) {
    let currentValue = arr[i]; // 保存当前值，避免重复访问数组
    let j = i - 1;

    // 后面可以优化成二分查插入
    // 将比当前值大的元素后移
    while (j >= 0 && arr[j] > currentValue) {
      arr[j + 1] = arr[j];
      j--;
    }
    // 插入当前值到正确的位置
    arr[j + 1] = currentValue;
  }
}

function insertionSortBifurcate(arr) {
  if (arr.length < 2) return;
  const len = arr.length;
  for (let i = 1; i < len; i++) {
    let currentValue = arr[i]; // 保存当前值，避免重复访问数组
    let left = 0;
    let right = i - 1;
    // 二分查找插入位置
    while (left <= right) {
      const mid = Math.floor((left + right) / 2);
      if (arr[mid] === currentValue) {
        break;
      } else if (arr[mid] < currentValue) {
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    }

    // 插入当前值到正确的位置
    for (let j = i; j > left; j--) {
      arr[j] = arr[j - 1];
    }
    arr[left] = currentValue;
  }
}

// node环境导出
module.exports = {
  insertionSort,
  insertionSortBifurcate,
};
