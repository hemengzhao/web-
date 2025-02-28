/***
 *  120. 三角形最小路径和 
 *  
 */
/**
 * @param {number[][]} triangle
 * @return {number}
 */
var minimumTotal = function(triangle) {
    const arr = new Array( triangle.at(-1).length).fill(Number.MAX_VALUE);

    arr[0] = triangle[0][0];
    for(let i =   1; i < triangle.length; i++) {
      const temp = [...arr];
        for(let j = 0; j < triangle[i].length; j++) { 
      
            arr[j] = triangle[i][j] + Math.min(temp[j], temp[j - 1]  ?? Number.MAX_VALUE ); 
        } 
        
        console.log("🚀 ~ minimumTotal ~ arr:", arr)
    }
    return Math.min(...arr);
}; 
 

