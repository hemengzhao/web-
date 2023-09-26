// 手写call  bind
function muCall(ctx, ...args) {
  // 判断 传入obj的类型，如果是null 或 undefined 就赋值为全局this
  const obj = ctx === null || ctx === undefined ? globalThis : Object(ctx);

  //  创建唯一的key
  const onlyKey = Symbol("key");

  //   给obj设置唯一的key属性，值为this
  obj.defineProperty(obj, onlyKey, {
    value: this,
    enumerable: false, // 不可枚举
    configurable: true, // 属性是否可以删除或编辑
  });

  //   执行方法获取结果
  const result = obj[onlyKey](args);

  //   删除属性
  delete obj[onlyKey];

  return result;
}

function myBind(ctx, ...ages) {
  const originalFunction = this; // 原函数
  return function (...ages1) {
    originalFunction.apply(ctx, [...ages, ...ages1]);
  };
}
