// 写一个方法把下划线命名转成大驼峰命名

function solutionOne(str) {
  return str.replace(/_[a-z]/g, (match, p1, p2, p3, offset, string) => {
    return match[1].toUpperCase();
  });
}
