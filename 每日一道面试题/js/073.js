//  合并重叠的子数组，有一个数组包含多个子数组，每个子数组都由不同的时间段[starti,endi]组成，要求合并所有重叠的时间段，返回一个新的二维数组
 
//  const arr = [[1, 3], [2, 6], [8, 10], [15, 18]]

//  function mergeOverlappingIntervals(intervals){
//     const newintervals = []
//     let str, end
//     intervals.forEach((element, k) => {
//         if(k===0){
//           str = element[0]
//           end = element[1]
//           return 
//         } 
        
//         if(element[0] > end){
//           newintervals.push([str, end])
//           str = element[0]
//           end = element[1]
//         } else {
//           end = element[1]
//         }

//         if(k === intervals.length - 1){
//           newintervals.push([str, element[1]])
//         }

//     });
//     return newintervals
//  }
//  function mergeOverlappingIntervals2(intervals){
//   intervals.sort((a, b) => a[0] - b[0])

//   const newintervals = []
   
//   for(const curry of intervals){
//     if(!newintervals.length || newintervals.at(-1)[1] < curry[0]){
//       newintervals.push(curry)
//     } else{
//       newintervals.at(-1)[1] = Math.max(newintervals.at(-1)[1], curry[1])
//     }
//   }

//   return newintervals
// }
//  console.log(mergeOverlappingIntervals2(arr))



var num = 1  // 8   14
var obj = {num: 2 }  // 9
obj.fn = (function (num) {  
    this.num = num * 4 
    num++ // 3
    return function (n) {  
        this.num += n 
       
        num++ // 5
        console.log(num)  
    }
})(obj.num) 

var fn = obj.fn 
fn(6)  // 4
obj.fn(7) // 5
console.log(num)  //  14
console.log(obj.num) // 9

// node 环境中执行结果是
// 4 
// 5
// 1
// 9


// 浏览器环境中执行结果是
// 4
// 5
// 14
// 9

// 浏览器环境：this 默认指向 window，全局变量 num 和 window.num 被修改。
// Node.js 环境：this 在全局范围可能指向 global，但在模块中 this 是 undefined，导致行为不同。