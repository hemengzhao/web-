/**
 * 2609. 最长平衡子字符串
 * @param {string} s
 * @return {number}
 */
var findTheLongestBalancedSubstring = function (s) {
  // 方式1
  // for (let i = Math.floor(s.length / 2); i > 0; i--) {
  //   if (s.match(`.*0{${i}}1{${i}}.*`)) return 2 * i;
  // }
  // 方式2
  for (let i = Math.floor(s.length / 2); i > 0; i--) {
    const str = "0".repeat(i) + "1".repeat(i);
    if (s.includes(str)) return i * 2;
  }

  return 0;
};
