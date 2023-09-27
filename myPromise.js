const PENDING = "pending";
const FULFILLED = "fulfilled";
const REJECTED = "rejected";
class myPromise {
  status = PENDING; // 状态
  successCallback = []; // 成功回调集合
  failCallback = []; // 失败回调集合
  value = ""; // 成功返回值
  reason = ""; // 失败返回值

  constructor(executor) {
    try {
      // 需要bind改变this， 不然找不到方法
      executor(this.resolve.bind(this), this.reject.bind(this));
    } catch (err) {
      this.reject(err);
    }
  }

  resolve(value) {
    if (this.status !== PENDING) return;
    this.status = FULFILLED;
    this.value = value;
    while (this.successCallback.length) {
      this.successCallback.shift()(this.value);
    }
  }
  reject(err) {
    if (this.status !== PENDING) return;
    this.status = REJECTED;
    this.reason = err;
    while (this.failCallback.length) {
      this.failCallback.shift()(this.reason);
    }
  }

  then(successCallback, faillCallback) {
    if (typeof successCallback !== "function") {
      successCallback = () => this.value;
    }
    if (typeof faillCallback !== "function") {
      faillCallback = (err) => {
        throw err;
      };
    }
    let promise = new myPromise((resolve, reject) => {
      if (this.status === FULFILLED) {
        // 异步
        setTimeout(() => {
          // 报错直接reject
          try {
            const x = successCallback(this.value);
            resolvePromise(promise, x, resolve, reject);
          } catch (err) {
            reject(err);
          }
        });
      } else if (this.status === REJECTED) {
        setTimeout(() => {
          try {
            faillCallback(this.reason);
          } catch (err) {
            reject(err);
          }
        });
      } else {
        this.failCallback.push(() => {
          setTimeout(() => {
            try {
              faillCallback(this.reason);
            } catch (err) {
              reject(err);
            }
          });
        });
        this.successCallback.push(() => {
          setTimeout(() => {
            try {
              const x = successCallback(this.value);
              resolvePromise(promise, x, resolve, reject);
            } catch (err) {
              reject(err);
            }
          });
        });
      }
    });

    // 返回Promise 完成链式调用
    return promise;
  }
  catch(fn) {
    return this.then(fn);
  }
}

function resolvePromise(promise, x, resolve, reject) {
  // 循环引用报错
  if (promise === x) {
    return reject(new TypeError("Chaining cycle detected for promise"));
  }
  // 防止多次调用
  let called;
  if (x !== null && (typeof x === "object" || typeof x === "function")) {
    try {
      // A+规定，声明then = x的then方法
      let then = x.then;
      // 如果then是函数，就默认是promise了
      if (typeof then === "function") {
        // 就让then执行 第一个参数是this   后面是成功的回调 和 失败的回调
        then.call(
          x,
          (y) => {
            // 成功和失败只能调用一个
            if (called) return;
            called = true;
            // resolve的结果依旧是promise 那就继续解析
            resolvePromise(promise2, y, resolve, reject);
          },
          (err) => {
            // 成功和失败只能调用一个
            if (called) return;
            called = true;
            reject(err); // 失败了就失败了
          }
        );
      } else {
        resolve(x); // 直接成功即可
      }
    } catch (e) {
      // 也属于失败
      if (called) return;
      called = true;
      // 取then出错了那就不要在继续执行了
      reject(e);
    }
  } else {
    resolve(x);
  }
}

new myPromise((resolve, reject) => {
  console.log(1);
  reject(2);
})
  .then(
    (x) => {
      console.log("🚀 ~ file: myPromise.js:125 ~ x:", x);
      return 3;
    },
    (err) => {}
  )
  .then(
    (x) => {
      console.log("🚀 ~ file: myPromise.js:131 ~ x:", x);
    },
    (err) => {}
  )
  .then(
    (x) => {
      console.log("🚀 ~ file: myPromise.js:131 ~ x:", x);
    },
    (err) => {}
  );

// new Promise((resolve, reject) => {
//   reject("File");
// })
//   .then(
//     (v) => {
//       console.log("🚀 ~ file: myPromise.js:169 ~ newPromise ~ v:", v);
//     },
//     (c) => {
//       console.log("🚀 ~ file: myPromise.js:172 ~ newPromise ~ c:", c);
//     }
//   )
//   .catch((err) => {
//     console.log("🚀 ~ file: myPromise.js:169 ~ newPromise ~ err:", err);
//   });
