//  是否全为中文
function isChinese(str) {
  let reg = /[^\u4e00-\u9fa5]/;
  if (reg.test(str)) {
    return false;
  }
  return true;
}

// 是否含有中文
function isHasChinese(str) {
  let reg = /.*[\u4e00-\u9fa5]+.*$/;
  if (reg.test(str)) {
    return false;
  }
  return true;
}
