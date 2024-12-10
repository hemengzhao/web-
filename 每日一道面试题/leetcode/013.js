/**
 * 2693. 使用自定义上下文调用函数
 * 
 */
/**
 * @param {Object} context
 * @param {Array} args
 * @return {null|boolean|number|string|Array|Object}
 */
Function.prototype.callPolyfill = function(context, ...args) {
    //  生成唯一的方法key
  const onlyKey = Symbol("key");

  context[key] = this;
  //   执行方法获取结果
  const result = context[onlyKey](...args);
  //   删除方法key
  delete context[onlyKey];

  //   return 结果
  return result;
}