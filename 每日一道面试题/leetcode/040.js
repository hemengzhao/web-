/***
 * 72. 编辑距离
 *  
 */
/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
var minDistance = function(word1, word2) {
    const n = word1.length;
    const m = word2.length;
    // dp 是一个二维数组，大小为 (n+1) x (m+1)，用于存储动态规划的状态。dp[i][j] 表示将 word1 的前 i 个字符转换为 word2 的前 j 个字符所需的最小编辑距离。
    const dp = new Array(n+1).fill(0).map(() => new Array(m+1).fill(0));

    // 边界条件
    // 当 word2 为空时（j = 0），将 word1 转换为空字符串需要删除 i 个字符，因此 dp[i][0] = i。
    // 当 word1 为空时（i = 0），将空字符串转换为 word2 需要插入 j 个字符，因此 dp[0][j] = j。
    for(let i = 0; i <= n; i++) {
        dp[i][0] = i;
    }
    for(let j = 0; j <= m; j++) {
        dp[0][j] = j;
    }

    // 动态规划状态转移
    // 遍历 word1 和 word2 的每个字符。
    // 如果 word1[i-1] 和 word2[j-1] 相等，不需要进行编辑操作，dp[i][j] = dp[i-1][j-1]。
    // 如果 word1[i-1] 和 word2[j-1] 不相等，可以进行三种编辑操作：
    for(let i = 1; i <= n; i++) {
        for(let j = 1; j <= m; j++) {
            if(word1[i-1] === word2[j-1]) {
                dp[i][j] = dp[i-1][j-1];
            } else {

                //dp[i-1][j] + 1：对应删除
                //dp[i][j-1] + 1：对应新增
                // dp[i-1][j-1] + 1：对应替换操作 
                dp[i][j] = Math.min(dp[i-1][j-1], dp[i][j-1], dp[i-1][j]) + 1;
            }
        }
    }

    // 返回结果
    return dp[n][m];
};