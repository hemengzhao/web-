/**
 * 3132. 找出与数组相加的整数 II
 *
 *
 *  给你两个整数数组 nums1 和 nums2。
 * 从 nums1 中移除两个元素，并且所有其他元素都与变量 x 所表示的整数相加。如果 x 为负数，则表现为元素值的减少。
 * 执行上述操作后，nums1 和 nums2 相等 。当两个数组中包含相同的整数，并且这些整数出现的频次相同时，两个数组 相等
 * 返回能够实现数组相等的 最小 整数 x 
 */
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var minimumAddedInteger = function(nums1, nums2) {
  if(nums1.length - nums2.length !== 2) return false
  nums1.sort((a, b) => a-b)
  nums2.sort((a, b) => a-b)
 
  for(let i = 2; i >=0; i--){
    let left = i + 1, right = 1
    while (left < nums1.length && right < nums2.length) {
        if (nums1[left] - nums2[right] === nums1[i] - nums2[0]) {
            right++;
        }
        left++;
    }
    if (right === nums2.length) {
        return nums2[0] - nums1[i];
    }
  }

  return false
};


 /**
 * @param {Object|Array} obj
 * @return {boolean}
 */
var isEmpty = function(obj) {
    if(Array.isArray(obj)){
      return obj.length
    } 
    if(Object.prototype.toString.call(obj) === '[Object, Object]'){
      return Object.keys(obj).length
    }

    return false
};