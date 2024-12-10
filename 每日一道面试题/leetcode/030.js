/***
 *    LCR 126. 斐波那契数
 *  
 */
/**
 * @param {number} n
 * @return {number}
 */
// d递归
var fib = function(n) {
    if(n < 2){
        return n
    } 
    return fib(n - 1) + fib(n-2)
};

// 去重递归
var fib1 = function(n ) {

    let arr = [0, 1]
    function dp(s){
        if(s < 2){
            return s
        } 
        if(arr[s]) return arr[s]
        const num = dp(s - 1) + dp(s - 2)
        arr.push(num)
        return num % 1000000007
    } 

    return dp(n) 
     
};


//  双指针
var fib2 = function(n) {
    if(n < 2){
        return n
    } 
    let l = 0, r =1;
    for(let i = 2; i <= n; i++){
        [l, r] = [r, (l+r) % 1000000007]
    }

    return r
};


console.log(fib2(100), fib1(100))