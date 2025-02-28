/***
 *   63. 不同路径 II 
 *  
 */
/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
var uniquePathsWithObstacles = function(obstacleGrid) {
    let x = obstacleGrid.length; 
    let y = obstacleGrid[0].length;
    const f = new Array(y).fill(0) 
    f[0] = obstacleGrid[0][0] === 0 ? 1 : 0;
    for(let i = 0; i < x; i++) {
        for(let j = 0; j < y; j++) {
            if(obstacleGrid[i][j] === 1) {
                 f[j] = 0;
            } else if (j > 0 && obstacleGrid[i][j - 1] === 0) {
              f[j] += f[j -1] ;
            } 
          }
    }
    return f[y - 1]
};
 