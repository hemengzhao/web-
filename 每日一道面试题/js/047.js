/*
 * @Author: mengzhao.he
 * @Date: 2024-01-03 10:21:58
 * @LastEditors: hemengzhao wb-mengzhao.he@ubtrobot.com
 * @LastEditTime: 2024-01-03 10:28:53
 * @FilePath: \LeetCode\每日一道面试题\js\047.js
 * @Description:
 *
 * Copyright (c) 2024 by ${git_name_email}, All Rights Reserved.
 */
/**
 * 设计单例模式
 * */
// const singleton = (className) => {
//   let isa = "";

//   return new Proxy(className, {
//     construct: function () {
//       if (!isa) {
//         isa = 12;
//         return;
//       }
//       return isa;
//     },
//   });
// };
class Singleton {
  constructor() {
    if (!Singleton.instance) {
      // 在这里创建实例
      Singleton.instance = this;
    }

    return Singleton.instance;
  }

  // 其他方法和属性可以在这里添加
}

// 通过调用 new Singleton() 获取实例
const instance = new Singleton();
const instance2 = new Singleton();

// instance2 === instance2;
console.log("🚀 ~ file: 047.js:45 ~ instance2 === instance2:", instance2 === instance2)
