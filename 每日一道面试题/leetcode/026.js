/***
 *   8. 字符串转换整数 (atoi)
 * 
 *  给你一个 32 位的有符号整数 x ，返回将 x 中的数字部分反转后的结果。
 */
/**
 * @param {string} s
 * @return {number}
 */
var myAtoi = function(s) {
  let n = '', l=0;  
  while(l < s.length){
    const text = s[l] 
    console.log("🚀 ~ myAtoi ~ text:", text, n)
    if((text === '-' || text === '+')  && n === '' ){
      n = text
    } else if(isNaN(Number(text))){
      l  = s.length
    } else if(text !== ' '){
      n += text
    } 

    if( Number(n) > Math.pow(2, 31)){
      l  = s.length
      n  = Math.pow(2, 31)
    } else if( Number(n) < Math.pow(-2, 31)){
      l  = s.length
      n  = Math.pow(2, 31) * -1
    }
    l++
  } 
  return Number(n) ||0 
// 
//   const number = parseInt(s, 10),
//   INT_MAX = 2147483647,   
//   INT_MIN = -2147483648;   
// return isNaN(number)?0:Math.max(Math.min(number,INT_MAX),INT_MIN)
};



console.log(myAtoi('+-12'))


