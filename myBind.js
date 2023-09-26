function MyBind(ctx, ...age) {
  const originalFunction = this; // 原函数
  return function (...age1) {
    return originalFunction.apply(ctx, [...age, ...age1]);
  };
}

Function.prototype.myBind = MyBind;
