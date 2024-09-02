/***
 *  6. Z 字形变换
 * 
 *  将一个给定字符串 s 根据给定的行数 numRows ，以从上往下、从左到右进行 Z 字形排列。

比如输入字符串为 "PAYPALISHIRING" 行数为 3 时，排列如下：

P   A   H   N
A P L S I I G
Y   I   R
 * 
 * */  
 
/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
    let i=0, t=true,arr=[];
    for(let j=0;j<s.length;j++){
        if(!arr[i]){
            arr[i]=[]
        }
        
        arr[i].push(s[j])
       
        t ? i++ : i--
        if(i===0){
            t = true
        }
        if(i === numRows-1){
            t = false
        }
    } 
    return arr.flat().join('')
    };