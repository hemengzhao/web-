//  第1天 用递归算法实现，数组长度为5且元素的随机数在2-32间不重复的值

function solutionOne() {
  let arr = [];
  const random = () => Math.floor(Math.random() * 31 + 2);
  const deep = () => {
    const num = random();
    if (!arr.includes(num)) {
      arr.push(num);
    }
    if (arr.length === 5) return;
    deep();
  };
  deep();
  return arr;
}

// 优化代码
function solutionOne() {
  const arr = new Set();

  while (arr.size < 5) {
    const num = Math.floor(Math.random() * 31 + 2);
    arr.add(num);
  }

  return Array.from(arr);
}
