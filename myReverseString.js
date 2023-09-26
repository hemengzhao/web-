/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 *
 * 双指针
 */
var reverseString = function (s) {
  let n = s.length - 1;
  for (var i = 0; i < n; i++, n--) {
    [s[i], s[r]] = [s[r], s[i]];
  }
};
