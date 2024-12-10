/***
 *    3. 无重复字符的最长子串
 * 
 *  
 * 
 * */  
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let max = 0

    for(let l = 0; l < s.length; l++){
         let r = l
        let res = []
        while(r < s.length){
            const rt = s[r]
             if(res.includes(rt)){
              
                break
            }
            res.push(rt)
            r++
        }

          max = Math.max(max, res.length)
    }
    return max
    
}; 
console.log("🚀 ~ lengthOfLongestSubstring ~ lengthOfLongestSubstring:", lengthOfLongestSubstring('au'))
console.log("🚀 ~ lengthOfLongestSubstring ~ lengthOfLongestSubstring:", lengthOfLongestSubstring('q'))
