/***
 *   11. 盛最多水的容器
 *  
 */
/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
  let l = 0, r=height.length-1, n = 0
  
      while(l < r){
          n = Math.max(n, (r-l) * Math.min(height[l],height[r]))
  
          if(height[l] > height[r]){
              r--
          } else {
              l++
          }
      }
  
      return n
  };

