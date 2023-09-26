// 写一个方法去掉字符串中的空格
// 写一个方法去掉字符串中的空格，要求传入不同的类型分别能去掉前、后、前后、中间的空格

function solutionOne(str, type) {
  switch (type) {
    case "left":
      return str.replace(/^\s+/, "");
      break;
    case "right":
      return str.replace(/\s+$/, "");
      break;
    case "both":
      return str.replace(/(^\s+)|(\s+$)/g, "");
      break;
    case "all":
      return str.replace(/\s+/g, "");
      break;
    default:
      return str;
  }
}
