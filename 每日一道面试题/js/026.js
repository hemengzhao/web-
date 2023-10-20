/**
 * 缓存函数
 *
 * 缓存函数是指保存函数的运行结果。 本质上就是用内存存储去换取性能的方法。
 * 特别适用于一些开销较大的计算或者频繁调用的函数
 *
 * 实现函数缓存主要依靠闭包、高阶函数、额外中间缓存（vuex/redux/localstorage）
 *
 * 虽然使用缓存效率是非常高的，但并不是所有场景都适用，因此千万不要极端的将所有函数都添加缓存
 * 以下几种情况下，适合使用缓存：
 * 1、对于昂贵的函数调用，执行复杂计算的函数
 * 2、对于具有有限且高度重复输入范围的函数
 * 3、对于具有重复输入值的递归函数
 * 4、对于纯函数，即每次使用特定输入调用时返回相同输出的函数
 * */
function expensiveCalculation(num) {
  console.log("Performing expensive calculation for:", num);
  return num * 2;
}

function cacheFunction(fn) {
  const cache = {};

  return function (num) {
    if (cache[num]) {
      console.log("Using cached result for:", num);
      return cache[num];
    } else {
      const result = fn(num);
      cache[num] = result;
      return result;
    }
  };
}

const cachedExpensiveCalculation = cacheFunction(expensiveCalculation);

console.log(cachedExpensiveCalculation(5)); // 计算并缓存结果
console.log(cachedExpensiveCalculation(5)); // 直接使用缓存结果
console.log(cachedExpensiveCalculation(10)); // 计算并缓存结果
console.log(cachedExpensiveCalculation(10)); // 直接使用缓存结果
