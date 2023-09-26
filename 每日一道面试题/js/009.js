// 大数相加
/***
 *  @param {string} num1
 * @param {string} num2
 * @return {string}
 */
function bigNumAdd(num1, num2) {
  if (
    typeof num1 !== "string" ||
    typeof num2 !== "string" ||
    isNaN(num1) ||
    isNaN(num2)
  ) {
    console.error("请传入合法的数字格式字符串");
    return;
  }

  let carry = 0, // 进位余数
    result = "";

  //   结构数据
  const [intPart1, decPart1 = ""] = num1.split(".");
  const [intPart2, decPart2 = ""] = num2.split(".");

  const maxLength = Math.max(decPart1.length, decPart2.length);
  const paddedDecPart1 = decPart1.padEnd(maxLength, "0"); // 位数不足填充0
  const paddedDecPart2 = decPart2.padEnd(maxLength, "0");

  // 计算小数部分
  for (let i = maxLength - 1; i >= 0; i--) {
    const digit1 = Number(paddedDecPart1[i]);
    const digit2 = Number(paddedDecPart2[i]);
    const sum = digit1 + digit2 + carry;
    carry = Math.floor(sum / 10);
    result = (sum % 10) + result;
  }
  if (maxLength) {
    result = "." + result;
  }

  //   计算整数部分
  let left = intPart1.length - 1,
    right = intPart2.length - 1;
  while (left > -1 || right > -1) {
    const n1 = Number(num1[left] ?? 0);
    const n2 = Number(num2[right] ?? 0);
    const sum = n1 + n2 + carry;
    carry = Math.floor(sum / 10);
    result = (sum % 10) + result;
    left--;
    right--;
  }

  //   返回结果
  return result;
}
const num1 = "12542344355646345364634453434543413535",
  num2 = "8587545646845231546343214342";
console.log(bigNumAdd(num1, num2), Number(num1) + Number(num2));
