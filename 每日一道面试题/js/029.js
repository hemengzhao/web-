// 鲁班软件 前端面试题  2023/10/20

/**
 * 实现getVal函数
 * 传入参数arr 格式 (number l undefined | Ary)[];
 * console.log(getVal([1，2,3,[9,undefined,8]，5，6，7]));
 * 输出:[ary1:[1,2,3,9,8,5,6,7]，ary2:[1,2,3,5,6,7,8,9])
 * */

function getVal(arr) {
  let _arr = arr.flat().filter((i) => i !== undefined);

  return {
    arr1: _arr,
    arr2: [..._arr].sort((a, b) => a - b),
  };
}

console.log(getVal([1, 2, 3, [9, undefined, 8], 5, 6, 7]));

/**
 * 实现一个洗牌算法，要求打乱一个排序好的数组
 *
 * */
function shuffle(arr) {
  const newArr = [...arr];
  for (let i = arr.length - 1; i--; i > 0) {
    const j = Math.floor(Math.random() * (i + 1));
    [newArr[i], newArr[j]] = [newArr[j], newArr[i]];
  }
  return newArr;
}
console.log(shuffle([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16]));

/**
 * 楼梯有n阶台阶，上楼可以一步上1阶，也可以一步上2阶，编一程序计算共有多少种不同的走法?
 * */
function climbStairs(n) {
  //   let a = 0,
  //     b = 0,
  //     c = 1;

  //   for (let i = 0; i <= n; i++) {
  //     a = b;
  //     b = c;
  //     c = a + b;
  //   }
  //   return c;

  if (n === 1) {
    return 1;
  }
  if (n === 2) {
    return 2;
  }

  let prev = 1; // n = 1时的走法数量
  let current = 2; // n = 2时的走法数量

  for (let i = 3; i <= n; i++) {
    let temp = prev + current; // 当前台阶的走法数量等于前两个台阶之和
    prev = current; // 更新前一个台阶的走法数量
    current = temp; // 更新当前台阶的走法数量
  }

  return current; // 返回n阶台阶的走法数量
}

/**
 * Javascript 实现深拷贝的方式(至少两种)?
 *
 * https://tangjiusheng.com/js/3990.html
 * */

function deepClone1(obj) {
  try {
    return JSON.parse(JSON.stringify(obj));
  } catch (e) {
    throw new Error("给定的数据格式错误， 请核验！");
  }
}

function deepClone2(obj, hash = new WeakMap()) {
  if (typeof obj !== "object" || obj === null) return obj;

  // 判断为日期或者正则
  if (obj instanceof Date) return new Date(obj);
  if (obj instanceof RegExp) return new RegExp(obj);

  if (hash.has(obj)) return hash.get(obj);
  const newObj = new obj.constructor();
  for (let key in obj) {
    if (Object.hasOwnProperty.call(obj, key)) {
      newObj[key] = deepClone2(obj[key]);
    }
  }
  return newObj;
}

// 该方法为Web最新的 API，存在兼容问题。
// 存在的限制： 如果 structuredClone() 传入一个类的实例，会得到一个普通的对象，因为结构化拷贝会丢弃对象的原型链；
// 如果对象包含了函数，会抛出异常；拷贝 DOM 节点会抛出异常
function deepClone3(obj) {
  return structuredClone(value);
}

// MessageChannel 利用消息通道实现深拷贝
function deepClone4(obj) {
  return new Promise((resolve) => {
    // 创建一个新 MessageChannel
    const channel = new MessageChannel();
    const port1 = channel.port1;
    const port2 = channel.port2;
    // 使用 postMessage 将源对象传递到另一个端口
    port1.postMessage(originalObject);

    port2.onmessage = (event) => {
      resolve(ev.data);
    };
  });
}

/**
 * 有一个树结构，结构如下，请用代码将树的叶子节点转换成一维数组，并保留路径
 * */

// interface TreeNode{
//  children: TreeNode[] | undefined;
//  name:string
// }
// 例如
const treeSample = {
  name: "level1",
  children: [
    { name: "left" },
    {
      name: "level2",
      children: [{ name: "left2" }, { name: "left3" }],
    },
  ],
};
// 应转换为
// const flattenTree = [
//   { name: "level1/left" },
//   { name: "level1/level2/left2" },
//   { name: "level1/level2/left3" },
// ];

function convert(treeSample, arr = [], path = "") {
  path += treeSample.name;
  if (treeSample.children?.length) {
    treeSample.children.forEach((element) => {
      convert(element, arr, path + "/");
    });
  } else {
    arr.push(path);
  }
  return arr;
}
// console.log(convert(treeSample));
// chatGPT 优化代码
function newConvert(treeSample, path = "") {
  path += treeSample.name;

  if (treeSample.children?.length) {
    return treeSample.children.flatMap((element) =>
      newConvert(element, path + "/")
    );
  } else {
    return [path];
  }
}
console.log(convert(treeSample), newConvert(treeSample));

/**
 * 请实现一个executePromise 函数，按传参的顺序先后执行，将返回的数据按先后顺序放到数组 result中
 * */

const timeoutVal = (ms, val) => {
  return new Promise((r) => setTimeout(() => r(val), ms)).then((e) => {
    console.log(e);
    return e;
  });
};

const func1 = () => timeoutVal(2000, 1);
const func2 = () => timeoutVal(1000, 2);
const func3 = () => timeoutVal(1500, 3);
const executePromise = (ajaxArray) => {
  //请在不使用async/await 的情况下实现
  // 在这里实现你的代码
  // 具体代码写在空白处

  // 方法1  这个方法 ajaxArray 里面的方法不会按照同步顺序执行， 但是最后的结果数组可以按顺序
  //   let arr = [],
  //     cun = 0;
  //   return new Promise((resolve, reject) => {
  //     ajaxArray.forEach((item, i) => {
  //       item().then((res) => {
  //         cun++;
  //         arr[i] = res;
  //         if (cun === ajaxArray.length) {
  //           resolve(arr);
  //         }
  //       });
  //     });
  //   });

  // 方法2
  if (!ajaxArray.length) return;
  let cun = 0;
  let data = [];

  return new Promise((resolve, reject) => {
    function deep() {
      ajaxArray[cun]().then((res) => {
        data.push(res);
        if (cun === ajaxArray.length - 1) {
          resolve(data);
        } else {
          cun++;
          deep();
        }
      });
    }
    deep();
  });

  // 方法3  https://www.cnblogs.com/amingxiansen/p/9351415.html
  //     var data = [];
  //   var sequence = Promise.resolve();
  //   ajaxArray.forEach(function (item) {
  //     sequence = sequence.then(item).then(function (res) {
  //       data.push(res);
  //       return data;
  //     });
  //   });
  //   return sequence;
};
// executePromise([func1, func2]).then((data) => {
//   console.log("done");
//   console.log(data);
// });
//输出
//1
//2
// done
// [1，2]
executePromise([func2, func1, func2, func2, func3]).then((data) => {
  console.log("done");
  console.log(data);
});
//输出
//1
//2
// 3
// done
// [1，2, 3]
