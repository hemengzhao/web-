/**
 * 生成随机数不重复的数字集合
 * @param {number} length 数组长度
 * @param {number} min 数字范围的最小值
 * @param {number} max 数字范围的最大值
 */
function generateUniqueRandomArray(length, min, max) {
  if (!length || min > max || length > max - min) {
    console.error("给定长度错误或者指定范围错误");
    return null;
  }
  const resultArr = [];
  while (resultArr.length < length) {
    const randomNum = Math.floor(Math.random() * (max - min + 1) + min);
    if (!resultArr.includes(randomNum)) {
      resultArr.push(randomNum);
    }
  }

  return resultArr;
}

// node环境导出
module.exports = {
  generateUniqueRandomArray,
};

// es6导出
// export { generateUniqueRandomArray };
