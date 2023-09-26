// 手写防抖节流函数

// 什么是防抖函数
// 防抖函数就是在一段时间内多次触发事件，只执行最后一次
function debounce(callback, time = 300) {
  let timeId = null;
  return function (...args) {
    if (timeId) clearTimeout(timeId);
    timeId = setTimeout(() => {
      callback.apply(this, args);
      timeId = null;
    }, time);
  };
}

// 什么是节流函数
// 节流函数就是在触发一个事件后，在一段时间内再次触发不做处理
function throttle(callback, time = 300) {
  let lastTime = 0;
  return function (...args) {
    const now = +new Date();
    if (now - lastTime > time) {
      lastTime = now;
      callback.apply(this, args);
    }
  };
}
