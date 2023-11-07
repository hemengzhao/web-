/**
 * 2624. 蜗牛排序
 * @param {number} rowsCount
 * @param {number} colsCount
 * @return {Array<Array<number>>}
 */
Array.prototype.snail = function (rowsCount, colsCount) {
  if (rowsCount * colsCount !== this.length) return [];

  let arr = new Array(rowsCount)
    .fill(0)
    .map(() => new Array(colsCount).fill(0));
  for (let i = 0; i < this.length; i++) {
    let row = Math.floor(i / rowsCount);
    let col = i % rowsCount;
    if (row % 2 === 1) {
      col = rowsCount - col - 1;
    }

    arr[col][row] = this[i];
  }
  return arr;
};

console.log(
  [19, 10, 3, 7, 9, 8, 5, 2, 1, 17, 16, 14, 12, 18, 6, 13, 11, 20, 4, 15].snail(
    5,
    4
  )
);

/**
 * const arr = [1,2,3,4];
 * arr.snail(1,4); // [[1,2,3,4]]
 */
