/*
 * @Author: mengzhao.he
 * @Date: 2023-11-27 14:18:23
 * @LastEditors: hemengzhao wb-mengzhao.he@ubtrobot.com
 * @LastEditTime: 2023-11-27 14:19:07
 * @FilePath: \LeetCode\每日一道面试题\js\045.js
 * @Description:
 *
 * Copyright (c) 2023 by ${git_name_email}, All Rights Reserved.
 */

// test1
{
  const [undefined, cat = undefined] = ["bilibili", globalThis.undefined];
  console.log("🚀 ~ file: index.tsx:88 ~ onChange ~ cat:", cat); // "bilibili"
  console.log("🚀 ~ file: index.tsx:88 ~ onChange ~ undefined:", undefined); // "bilibili"
}

// test2
{
  const [undefined, cat] = ["bilibili", globalThis.undefined];
  console.log("🚀 ~ file: index.tsx:88 ~ onChange ~ cat:", cat); // undefined
  console.log("🚀 ~ file: index.tsx:88 ~ onChange ~ undefined:", undefined); // "bilibili"
}

// 建议使用void 0 代替undefined
