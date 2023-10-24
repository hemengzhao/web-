/**
 * 请把两个数组 ['A1', 'A2', 'B1', 'B2', 'C1', 'C2', 'D1', 'D2'] 和 ['A', 'B', 'C', 'D']，
 * 合并为 ['A1', 'A2', 'A', 'B1', 'B2', 'B', 'C1', 'C2', 'C', 'D1',
 * */
function concatArr(arr1, arr2) {
  ``;
  const arr = [...arr1];
  let cunt = 0;
  arr2.forEach((item) => {
    while (cunt < arr.length) {
      ++cunt;
      if (!arr[cunt]?.startsWith(item)) {
        arr.splice(cunt, 0, item);
        break;
      }
    }
  });

  return arr;
}
console.log(
  concatArr(
    ["A1", "A2", "B1", "B2", "C1", "C2", "D1", "D2"],
    ["A", "B", "C", "D"]
  )
);

var b = 10;
(function () {
  console.log(b);
  b = 20;
})();
