let activeEffect;
// 导出一个名为effect的函数，该函数接受两个参数：fn和options
export function effect(fn, options) {
  // 创建一个effect实例
  const _effect = new CreateReactiveEffect(fn, () => {
    _effect.run();
  });
  _effect.run();
  return _effect;
}

class CreateReactiveEffect {
  public active = true; // 创建的是effect响应式
  constructor(public fn, public scheduler) {
    this.fn = fn;
    this.scheduler = scheduler;
  }
  run() {
    if (!this.active) {
      return this.fn();
    }
    activeEffect = this;
    return this.fn();
  }
}
