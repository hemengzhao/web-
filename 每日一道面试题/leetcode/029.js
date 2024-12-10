/***
 *   15. 三数之和
 *  
 */
/**
 * @param {number[]} nums
 * @return {number[][]}
 */

// 暴力循环   （会超时）
var threeSum1  = function(nums) {
     let x =0 ,y = 1, z= 2;
        let arr = []
     let map = new Map()
    while(x < nums.length - 2){   
        while(y < nums.length - 1){
            let num2 = nums[x] + nums[y]
            while(z < nums.length){ 
                const n = [nums[x], nums[y], nums[z]].sort().join(',') 
                if(num2 + nums[z] === 0 && !map.has(n)){ 
                    map.set(n,[nums[x], nums[y], nums[z]]) 
                    arr.push([nums[x], nums[y], nums[z]])
                }
                z++ 
            }
            y++
            z = y + 1
        }
        x++
        y = x +1
        z = x +2 
    }
    return arr
}; 
// 暴力循环   （会超时）
var threeSum2  = function(nums) {
    const newNum = nums.sort() 
    let arr = []
    let setT = new Set()
    for(let i = 0; i < newNum.length; i++){
        if(newNum[i] > 0) break
        let l = i + 1, r = i + 2 
        while(l < newNum.length){
            if(newNum[l] > (0 - newNum[i]))  l =  newNum.length
            let t =  newNum[i] + newNum[l]
            while(r < newNum.length){
                if(newNum[r] > ( 0 - t)) r =  newNum.length
                let n = [newNum[i], newNum[l], newNum[r]] 
                if(newNum[r] + t === 0 && !setT.has(n.join(','))){
                    setT.add(n.join(','))
                    arr.push(n)
                }
                r++
            }
            l++ 
            r = l +1
        } 
    }

    return arr
}; 


var threeSum   = function(nums) {
    nums.sort((a, b) => a - b); // 排序
    let arr = []
   
    for(let i = 0; i < nums.length; i++){
        if(nums[i] > 0) break
        if(i > 0 && nums[i] === nums[i-1]) continue
         let l = i + 1, r = nums.length - 1

         while(l < r){
            let sum = nums[i] + nums[l] + nums[r]
            if(sum === 0){
                arr.push([nums[i], nums[l], nums[r]]) 
                while(l < r && nums[l] === nums[l + 1] ) l++  // 去重
                while(l < r && nums[r] === nums[r - 1] ) r-- // 去重

                l++;
                r--;
            } else if (sum < 0){
                l++
            } else {
                r--
            } 
         } 
    }

    return arr
}; 


 let test1 = [34,55,79,28,46,33,2,48,31,-3,84,71,52,-3,93,15,21,-43,57,-6,86,56,94,74,83,-14,28,-66,46,-49,62,-11,43,65,77,12,47,61,26,1,13,29,55,-82,76,26,15,-29,36,-29,10,-70,69,17,49]
console.log(threeSum([-1,0,1,2,-1,-4]) )
console.log(threeSum(test1) )
 