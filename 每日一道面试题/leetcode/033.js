/***
 *  64. 最小路径和  
 *  
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
/**
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSum = function(grid) {
    let m = grid.length;
    let n = grid[0].length;
    for(let i = 0; i < m; i++){
        for(let j = 0; j < n; j++){ 
          const arr = []
          if(j > 0){
            arr.push(grid[i][j-1])
          }
          if(i > 0){
            arr.push(grid[i-1][j])
          }  
          const minV = j === 0 && i === 0 ? 0:  Math.min(...arr)  ; 
          grid[i][j] =  grid[i][j] + minV
        }
    } 
    return grid[m-1][n-1]; 
}; 