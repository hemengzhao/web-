/***
 *  5. 最长回文子串
 * 
 *  
 * 
 * */  
/**
 * @param {string} s
 * @return {string}
 */
// var longestPalindrome = function(s) {
//     let max = ''

//     for(let i=0; i< s.length; i++) {
//         // 分奇偶， 一次遍历，每个字符位置都可能存在奇数或偶数回文
//         helper(i, i)
//         helper(i, i+1)
//     }

//     function helper(l, r) {
//         // 定义左右双指针
//         while(l>=0 && r< s.length && s[l] === s[r]) {
//             l--
//             r++
//         }
//         // 拿到回文字符， 注意 上面while满足条件后多执行了一次，所以需要l+1, r+1-1
//         const maxStr = s.slice(l + 1, r + 1 - 1);
//         // 取最大长度的回文字符
//         if (maxStr.length > max.length) max = maxStr
//     }
//     return max
  
// };
 
// var longestPalindrome = function(s) {
//     if(s.length < 2) return s
//      let obj = {
//         l: 0,
//         s: 0,
//         e: 0,
//      }
//      for(let i=0; i< s.length; i++) {
//         helper(i, i)
//         helper(i, i+1)
//      }

//      function helper(l, r) {
//          while(l>=0 && r< s.length && s[l] === s[r]) {
//              l--
//              r++
//          }
//          const len  = r - l + 1
//          if(len > obj.l) obj = {
//             l: len,
//             s: l,
//             e: r
//         } 
//      }

//      return s.slice(obj.s +1, obj.e  )
// };

// 动态规划
var longestPalindrome = function(s) {
    if(s.length < 2) return s
    // dp[i][j] 表示 s[i..j] 是否是回文串
    let dp = Array.from({length: s.length}, () => Array(s.length).fill(false))
    let max = 1
    let start = 0
    for(let i=0; i< s.length; i++) {
        dp[i][i] = true
    }

    for(let j=1; j< s.length; j++) {
        for(let i=0; i< j; i++) {
            if(s[i] === s[j]) {
                if(j - i < 3) {
                    dp[i][j] = true
                } else {
                    dp[i][j] = dp[i+1][j-1]
                }

                // abcdcba
            } else {
                dp[i][j] = false
            }

             // 只要 dp[i][j] == true 成立，就表示子串 s[i..j] 是回文，此时记录回文长度和起始位置
            if(dp[i][j]) { 
                if(j - i + 1 > max) {
                    max = j - i + 1
                    start = i
                } 
            }
        }
    }
    return s.slice(start, start + max)
 };