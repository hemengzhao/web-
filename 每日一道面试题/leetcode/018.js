/***
 *  204. 计数质数
 * 
 *  
 * 
 * */  

/**
 * @param {number[]} nums
 * @return {number}
 */
var deleteAndEarn = function(n) {
  // if( n < 2) return 0
  // const arr = new Array(n).fill(false)
  // let t = 0
  //  for(let i = 2; i < n; i++){   
  //     if(i === 2 || !arr[i]) { 
  //       t++
  //     } 
  //     for(let j = i * 2; j < n; j += i){
  //       arr[j] = true
  //     } 
  //  } 
  //  return t

   for(var i = 2, r = 0, isPrime = new Int8Array(n).fill(1); i < n; i++) 
    if(isPrime[i]) {
        r++
        for(var j = i * i; j < n; j += i) isPrime[j] = 0
    }
    return r 
};

 
console.log("🚀 ~ nums:", deleteAndEarn(10))
