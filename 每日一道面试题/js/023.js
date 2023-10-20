/**
 * call apply bind
 * 相同:
 * 1. 都是动态修改函数this的指向
 * 2. 都不会修改原来函数的this指向
 * 3. 第一个参数都是this要指向的对象
 *
 * 不同
 * 1. call和apply都是直接调用, bind是返回一个新函数
 * 2. call和bind的参数都市依次传参, apply只有两个参数,第二个参数是数组格式
 *  fn.call(Object, param1, param2, ....., paramN)
 *  fn.bind(Object, param1, param2, ....., paramN)()
 *  fn.apply(Object, [param1, param2, ....., paramN])
 *  */
