/**
 * 3152. 特殊数组 II
 * nums = [3,4,1,2,6], queries = [[0,4]] [false]
 * 
 * nums = [4,3,1,6], queries = [[0,2],[2,3]] [false,true]
 */
/**
 * @param {number[]} nums
 * @param {number[][]} queries
 * @return {boolean[]}
 */
var isArraySpecial = function(nums, queries) {
  // 方案一
  // const answer = []
  // for(let i = 0; i < queries.length; i++){ 
  //   const list = nums.slice(queries[i][0], queries[i][1] + 1)  
  //   let q = list[0] % 2
  //   let a = true
  //   for(let j = 1; j < list.length;  j++){
  //     if(q === list[j] % 2){
  //       a = false
  //       break 
  //     }
  //     q = list[j] % 2
  //   }
  //   answer.push(a)
  // }
  // return answer
 
 
//  方案二
  // let  errorIndex = []
  // for(let i = 0; i < queries.length; i++){ 
  //   let [left, right] = queries[i]
  //   const t = errorIndex.some(c  => (c[0] >= left && c[1] <= right))
  //   console.log("🚀 ~ isArraySpecial ~ t:", t, errorIndex, left, right)
  //   if(t){
  //     queries[i] = false 
  //     continue
  //   } 

  //   let q = true
  //   while(left <  right){
  //     if(nums[left] % 2 === nums[left + 1] % 2){
  //       q = false
  //       errorIndex.push([left, left + 1])
        
  //       console.log("🚀 ~ isArraySpecial ~ errorIndex:", errorIndex)
  //       // errorIndex.sort((a, b) => a -b)
  //       break
  //     }
  //     left++
  //   }

  //   queries[i] = q

  // }

  // return queries


  // 方案三（解题库）
  const pre = [0]
  for( let i = 1;i < nums.length;i++) {
      pre[i] = pre[i -1] 
      if (nums[i - 1] % 2 == nums[i] % 2) pre[i]++

  }
  return queries.map(v => pre[v[0]] == pre[v[1]])
  
};
// isArraySpecial([3,4,1,2,6], [[0,4] ])
// isArraySpecial([4,3,1,6], [[0,2],[2,3]])
console.log("🚀 ~ isArraySpecial([4,3,1,6], [[0,2],[2,3]]):", isArraySpecial([4,3,1,6], [[0,2],[2,3]]))
