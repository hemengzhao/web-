/**
 * 如下：{1:222, 2:123, 5:888}，
 * 请把数据处理为如下结构：[222, 123, null, null, 888, null, null, null, null, null, null, null]
 * */
let obj = { 1: 222, 2: 123, 5: 888 };
function create(data) {
  return Array.from({ length: 12 }).map((item, i) => {
    return data[i + 1] ?? null;
  });
}

console.log(create(obj));
