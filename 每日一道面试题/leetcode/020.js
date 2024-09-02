/***
 *  2. 两数相加
 * 
 *  
 * 
 * */  
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    const l = Math.max(l1.length, l2.length )
    let num = ''
    let remainder=0
    for(let i = -1; i >= l * -1; i--){
        const a1 = l1.at(i) ?? 0
        const a2 = l2.at(i) ?? 0
        const  n  = a1 + a2 + remainder

        if(n < 10){
            remainder = 0
            num = n + num
        } else {
            remainder = 1
            num = n % 10  + num
        }
    }

    if(remainder){
        num = remainder + num
    }
    return num
};


console.log("🚀 ~ addTwoNumbers ~ addTwoNumbers:", addTwoNumbers([2,4,3], [5,6,4]))
console.log("🚀 ~ addTwoNumbers ~ addTwoNumbers:", addTwoNumbers([0], [0]))
console.log("🚀 ~ addTwoNumbers ~ addTwoNumbers:", addTwoNumbers([9,9,9,9,9,9,9], [9,9,9,9]))