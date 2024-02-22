/**
 * 2649. 嵌套数组生成器
 * @param {Array} arr
 * @return {Generator}
 */
var inorderTraversal = function* (arr) {
  for (var i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      yield* inorderTraversal(arr[i]);
    } else {
      yield arr[i];
    }
  }
};
