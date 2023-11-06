/**
 * LazyMan('Tony');
 * // Hi I am Tony
 * LazyMan('Tony').sleep(10).eat('lunch');
 * // Hi I am Tony
 * // 等待了 10 秒...
 * // I am eating
 * lunchLazyMan('Tony').eat('lunch').sleep(10).eat('dinner');
 * // Hi I am Tony
 * // I am eating lunch// 等待了 10 秒...
 * // I am eating
 * dinerLazyMan('Tony').eat('lunch').eat('dinner').sleepFirst(5).sleep(1
 * 0).eat('junk food');
 * // Hi I am Tony// 等待了 5 秒...
 * // I am eating lunch
 * // I am eating dinner
 * // 等待了 10 秒...
 * // I am eating junk food
 * */

class LazyManClass {
  constructor(name) {
    this.name = name;
    this.queue = [];
    console.log(`Hi I am ${name}`);
    setTimeout(() => {
      this.next();
    }, 0);
  }
  sleepFirst(time) {
    const fn = () => {
      setTimeout(() => {
        console.log(`等待了${time}秒...`);
        this.next();
      }, time);
    };
    this.queue.unshift(fn);
    return this;
  }
  sleep(time) {
    const fn = () => {
      setTimeout(() => {
        console.log(`等待了${time}秒...`);
        this.next();
      }, time);
    };
    this.queue.push(fn);
    return this;
  }
  eat(food) {
    const fn = () => {
      console.log(`I am eating ${food}`);
      this.next();
    };
    this.queue.push(fn);
    return this;
  }
  next() {
    const fn = this.queue.shift();
    fn && fn();
  }
}
function LazyMan(name) {
  return new LazyManClass(name);
}
