/***
 *   62. 不同路径 
 *  
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function(m, n) {
  const arr = new Array(m).fill(0).map(() => new Array(n).fill(0));
  arr[0].fill(1);
  for (let i = 1; i < m; i++) {
    arr[i][0] = 1;
    for (let j = 1; j < n; j++) {
        arr[i][j] = arr[i - 1][j] + arr[i][j - 1];
    }
  } 
  return arr[m - 1][n - 1]; 
};

uniquePaths(3, 7);