
// 会造成溢栈
// function foo(){
//   foo()
//  }

//  foo()


// 会造成溢栈
//  function foo(){
//   setTimeout( foo(), 0)
//  }

//  foo()

 
// 不会造成溢栈
//  function foo(){
//   setTimeout(foo, 0)
//  }

//  foo()

// 不会造成溢栈出但却会让整个页面卡住。
function foo() {
  return Promise.resolve().then(foo)
}
foo()


// setTimeout封装的函数是一个宏任务，所以递归调用setTimeout里的foo函数时只会使得主线程不断重复的从消息队列中取出由setTimeout所产生的不同的宏任务，并且，每次执行完宏任务时都会及时退出foo函数的调用栈，所以不会导致栈溢出。


// Promise.resolve()会触发微任务，解析引擎会将该微任务添加进微任务队列中，退出当前 foo 函数的执行, 由于这个微任务就是调用 foo 函数本身，所以在执行微任务的过程中，需要继续调用 foo 函数，在执行 foo 函数的过程中，又会触发了同样的微任务, 那么这个循环就会一直持续下去，当前的宏任务无法退出，也就意味着消息队列中其他的宏任务是无法被执行的，比如通过鼠标、键盘所产生的事件