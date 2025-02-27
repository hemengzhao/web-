/***
 *   740. 删除并获得点数
 *  
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
var deleteAndEarn = function(nums) {
    const maxValue = Math.max(...nums);
    const arr = new Array(maxValue + 1).fill(0);
    for (let i = 0; i < nums.length; i++) {
        arr[nums[i]] += nums[i];
    }
    let prev = 0, curr = 0;
    for (let i = 0; i < arr.length; i++) {
        [prev, curr] = [curr, Math.max(curr, prev + arr[i])];
    }
    return curr;
};