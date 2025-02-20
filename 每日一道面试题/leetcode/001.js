/**
 * 2586. 统计范围内的元音字符串数
 *
 * 给你一个下标从 0 开始的字符串数组 words 和两个整数：left 和 right 。
 * 如果字符串以元音字母开头并以元音字母结尾，那么该字符串就是一个 元音字符串 ，其中元音字母是 'a'、'e'、'i'、'o'、'u' 。
 * 返回 words[i] 是元音字符串的数目，其中 i 在闭区间 [left, right] 内。
 * */

function vowelStrings(words, left, right) {
  const vowel = ["a", "e", "i", "o", "u"];
  const arr = words.filter((str, i) => {
    if (i < left || i > right) return false;
    return vowel.includes(str[0]) && vowel.includes(str.at(-1));
  });
  return arr.length;
}


// 时间                金额            转出账户           转入账户
// 2022/12/25          5000            微信               交通银行
// 2023/05/22          30000           工商               交通银行
// 2023/05/23          30000           工商               交通银行
// 2023/05/24          30000           工商               交通银行
// 2023/05/25          30000           工商               交通银行
// 2023/06/30          30000           工商               交通银行
// 2023/07/01          20000           工商               交通银行
// 2023/08/11          20000           工商               交通银行
// 2023/08/11          10000           招商               交通银行
// 2023/09/27          1000            招商               交通银行
// 2023/09/29          20000           z支付宝             交通银行
// 2023/10/02          3000            招商               交通银行
// 2023/10/11          7000            招商               交通银行
// 2023/11/16          5000            微信               交通银行  
// 2024/01/10          5000            微信               交通银行
// 2024/02/07          200000          微信               交通银行
// 2024/02/07          30000          微信               交通银行
// 2024/02/07          100000          支付宝               交通银行
// 2024/02/08          100000          支付宝               交通银行
// 2024/02/09          100000          支付宝               交通银行
// 2024/02/10          100000          支付宝               交通银行
// 2024/02/10          100000          微信               交通银行
// 2024/03/13          120000          招商               交通银行
// 2024/05/16          150000          招商               交通银行
// 2024/06/13          100000          招商               交通银行
// 2024/07/11          100000          招商               交通银行
// 2024/09/15          200000          招商               交通银行
// 2024/11/15          240000          招商               交通银行