/***
 *  4. 寻找两个正序数组的中位数
 * 
 *  
 * 
 * */  
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    // const num = nums1.concat(nums2).sort((a, b) => a - b)
    // const m = Math.floor(num.length / 2) 
   
    // if(num.length % 2){
    //     return num[m]
    // } else {
    //     let l = m - 1;
    //     let r = m 
    //     return (num[l] + num[r]) / 2
    // } 

    const l1 = nums1.length 
    const l2 = nums2.length 

    const l = l1 +l2
    let i = 0, i1=0, i2=0, arr =[]
    while(i <= l / 2 ){ 
        let num
        if(i1 >= l1){
            num = nums2[i2]
            i2++
        } else if(i2 >= l2){
            num = nums1[i1]
            i1++
        } else if(nums1[i1] < nums2[i2]) {
            num = nums1[i1]
            i1++
        } else {
            num = nums2[i2]
            i2++
        } 
        arr.push(num)
        i++
    } 
    return l % 2 ? arr.at(-1) : (arr.at(-1) + arr.at(-2))/ 2

};

// console.log("🚀 ~ findMedianSortedArrays ~ findMedianSortedArrays:", findMedianSortedArrays([1,3], [2]))
// console.log("🚀 ~ findMedianSortedArrays ~ findMedianSortedArrays:", findMedianSortedArrays([1,3], [2,4]))
console.log("🚀 ~ findMedianSortedArrays ~ findMedianSortedArrays:", findMedianSortedArrays([0,0], [0,0]))