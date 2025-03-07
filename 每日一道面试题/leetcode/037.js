/***
 *  221. 最大正方形
 *  
 */
/**
 * @param {character[][]} matrix
 * @return {number}
 */
var maximalSquare = function(matrix) {
    if (!matrix.length || !matrix[0].length) return 0;
    const rows = matrix.length, cols = matrix[0].length;
    let maxSide = 0;
    // 初始化二维 DP 数组（多一行一列简化边界处理）
    const dp = Array.from({ length: rows + 1 }, () => Array(cols + 1).fill(0));
    
    for (let i = 1; i <= rows; i++) {
        for (let j = 1; j <= cols; j++) {
            if (matrix[i - 1][j - 1] === '1') {
                // 状态转移方程
                dp[i][j] = Math.min(dp[i - 1][j], dp[i][j - 1], dp[i - 1][j - 1]) + 1;
                maxSide = Math.max(maxSide, dp[i][j]);
            }
        }
    }
    return maxSide ​**​ 2;
};

