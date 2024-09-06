function promiseAll(promises) {
  return new Promise((resolve, reject) => {
    if (!Array.isArray(promises)) {
      reject(new TypeError('arguments must be an array'));
      return;
    }
    let resolvedCounter = 0;
    let promiseNum = promises.length;
    let resolvedResults = new Array(promiseNum);
    for (let i = 0; i < promiseNum; i++) {
      Promise.resolve(promises[i]).then(value => {
        resolvedCounter++;
        resolvedResults[i] = value;
        if (resolvedCounter === promiseNum) {
          resolve(resolvedResults);
        }
      }, reason => {
        reject(reason);
      });
    }
  });
}
