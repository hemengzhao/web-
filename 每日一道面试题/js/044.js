/*
 * @Author: mengzhao.he
 * @Date: 2023-11-24 17:56:47
 * @LastEditors: hemengzhao wb-mengzhao.he@ubtrobot.com
 * @LastEditTime: 2023-11-27 14:18:45
 * @FilePath: \LeetCode\每日一道面试题\js\044.js
 * @Description:
 *
 * Copyright (c) 2023 by ${git_name_email}, All Rights Reserved.
 */
class Cat {
  touchFish() {
    return function () {
      console.log("this is", this);
    };
  }
}

const cat = new Cat();
const fn = cat.touchFish();

fn();
