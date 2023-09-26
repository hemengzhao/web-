// 实现微任务

function myMicrotask(callbaCK) {
  if (typeof queueMicrotask === "function") {
    // 环境支持 queueMicrotask（现代浏览器）
    queueMicrotask(callbaCK);
  } else if (
    typeof process === "object" &&
    typeof process.nextTick === "function"
  ) {
    // node.js
    process.nextTick(callback);
  } else if (typeof MessageChannel === "function") {
    // 浏览器环境，使用 MessageChannel
    const channel = new MessageChannel();
    channel.port1.onmessage = (event) => {
      event.data();
    };
    channel.port2.postMessage(callback);
  } else if (typeof MutationObserver === "function") {
    let obj = new MutationObserver(callback);
    let node = document.createTextNode("");
    obj.observe(node, {
      characterData: true,
    });
    node.data = 1;
  } else if (typeof Promise === "function") {
    Promise.resolve().then(callback);
  } else {
    // 最后的降级方案，使用 setTimeout
    setTimeout(callbaCK, 0);
  }
}
myMicrotask(() => {
  console.log(11);
});
console.log(22);
