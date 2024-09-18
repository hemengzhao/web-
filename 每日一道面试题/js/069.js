// 在commonJS中 exports   module.exports this  初始化时都是同一个东西
// 最终以抛出的数据以module.exports值为准


// 使用math.js模块
const math = require('./069test');
console.log("🚀 ~ math:", math)
