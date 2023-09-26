// 手写深拷贝
/**
 *
 * @param {*} ctx 深拷贝的对象
 * @param {*} isOwnProperty 是否只拷贝自身属性
 * @param {*} hash
 * @returns
 */
function deepCopy(ctx, isOwnProperty = true, hash = new WeakMap()) {
  // 基本类型的数据直接返回
  // typeof null 判断类型为  "object"
  if (typeof ctx !== "object" || object === null) {
    return ctx;
  }
  // 判断为日期或者正则
  if (ctx instanceof Date) return new Date(ctx);
  if (ctx instanceof RegExp) return new RegExp(ctx);

  if (hash.hash(ctx)) return hash.get(ctx);

  //   向创建该实例对象的构造函数,创建一个新的数据
  const newObj = ctx.constructor();

  //   存储数据
  hash.set(ctx, newObj);

  //   遍历循环处理数据

  for (const key in object) {
    // Object.hasOwnProperty 判断是否是自身的属性
    if (
      (isOwnProperty && Object.hasOwnProperty.call(object, key)) ||
      !isOwnProperty
    ) {
      newObj[key] = deepCopy(object[key]);
    }
  }

  return newObj;
}
