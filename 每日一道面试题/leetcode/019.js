/***
 *  1. 两数之和
 * 
 *  
 * 
 * */  
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) { 
    const boj = {}
    for(let i = 0; i < nums.length; i++){
        const num = target - nums[i]
        if(boj[num] !== undefined){
            return [boj[num], i]
        } else {
            boj[nums[i]] = i
        } 
    }
    return []
};