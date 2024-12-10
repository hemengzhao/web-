/***
 * 1668. 最大重复子字符串
 * 
 * 给你一个字符串 sequence ，如果字符串 word 连续重复 k 次形成的字符串是 sequence 的一个子字符串，那么单词 word 的 重复值为 k 。单词 word 的 最大重复值 是单词 word 在 sequence 中最大的重复值。如果 word 不是 sequence 的子串，那么重复值 k 为 0 。
 * */  

/**
 * @param {string} sequence
 * @param {string} word
 * @return {number}
 */
var maxRepeating = function(sequence, word) {
if(sequence.indexOf(word) === -1) return 0
if(sequence === word ) return 1
// 方式一
// return sequence.split(word).length -1

//  方式二
// let r = word.length;
// let t = 0;
// let s = sequence.slice(0, word.length) 
//  while(r < sequence.length ){ 
//   if(s === word){
//     t++
//   }
//   s = s.slice(1) + sequence[r]
//   console.log("🚀 ~ maxRepeating ~ s:", s)
//   r++
//  }
//  return t

// 未读懂题目，是要连续重复的最大子字符
  let l = Math.floor(sequence.length / word.length)
  let t = 0
 for(let i = 0; i < l; i++){
  if(sequence.includes(word.repeat(i))){
    t = i
  }
 }

 return t
};

 
const a = maxRepeating('aaabaaaabaaabaaaabaaaabaaaabaaaaba', 'aaaba')
console.log("🚀 ~ a:", a)
