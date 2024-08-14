/**
 *  3151. 特殊数组 I
 *
 *
 *  如果数组的每一对相邻元素都是两个奇偶性不同的数字，则该数组被认为是一个 特殊数组 。
  *  Aging 有一个整数数组 nums。如果 nums 是一个 特殊数组 ，返回 true，否则返回 false
 */

/**
 * @param {number[]} nums
 * @return {boolean}
 */
const isArraySpecial = function(nums) {
  if(nums.length === 1) return true

  let t = true
  let q = nums[0] % 2
  for (let index = 1; index < nums.length; index++) {
      const p = nums[index] % 2
      if(p === q){
        t = false
        break
      }
      q = p
  }
  return t
};