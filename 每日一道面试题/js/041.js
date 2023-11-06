/**
 * 给定x*y，实现旋转表格数字填写。
 *
 * 如 4 * 7
 * 1  2  3  4  5  6  7
 * 18 19 20 21 22 23 8
 * 17 28 27 26 25 24 9
 * 16 15 14 13 12 11 10
 * */
function rotateArray(x, y) {
  let arr = new Array(x);
  // 设置二维数组个数
  for (let i = 0; i < x; i++) {
    arr[i] = new Array(y).fill(0);
  }

  let count = 1,
    top = 0,
    bottom = x - 1,
    left = 0,
    right = y - 1;
  while (count <= x * y) {
    // 从左到右
    for (let i = top; i <= right; i++) {
      arr[top][i] = count++;
    }
    top++;

    // 从上到下
    for (let i = top; i <= bottom; i++) {
      arr[i][right] = count++;
    }
    right--;

    // 从右到左
    for (let i = right; i >= left; i--) {
      arr[bottom][i] = count++;
    }
    bottom--;

    // 从下到上
    for (let i = bottom; i >= top; i--) {
      arr[i][left] = count++;
    }
    left++;
  }

  return arr;
}
console.log(rotateArray(4, 7));
