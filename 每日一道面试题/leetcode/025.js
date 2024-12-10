/***
 *   7. 整数反转
 * 
 *  给你一个 32 位的有符号整数 x ，返回将 x 中的数字部分反转后的结果。
 */
/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
 
  const s =  Math.abs(x).toString() 
    let t = '', r = s.length - 1
    while( r > -1){
        t += s[r--]
    }
    t *= x >  0 ? 1  : -1
    if(t < Math.pow(-2, 31) || (t > Math.pow(2, 31))) return 0
  return  t
};