/***
 *   628. 三个数的最大乘积
 *  
 */
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var maximumProduct = function(nums) {
    let max1 = Number.MIN_SAFE_INTEGER, max2 = Number.MIN_SAFE_INTEGER, max3 = Number.MIN_SAFE_INTEGER;

    let min1 =Number.MAX_SAFE_INTEGER, min2 = Number.MAX_SAFE_INTEGER
 
    nums.forEach(item => {
         
        if(item > max1){
            [max1, max2, max3] = [item, max1, max2]
        } else if(item > max2){
            [ max2, max3] = [item,  max2]
        } else if(item > max3){
            max3 = item
        }

        if(item < min1){
            [ min1, min2] = [item,  min1]
        } else if(item < min2){
            min2 = item
        }
    })
 
    return Math.max(max1 * max2 * max3, min1 * min2 * max1)
};

 