console.log(0 == ""); // true
console.log(0 == "0"); // true
console.log(2 == true); // false
console.log(2 == false); // false
console.log(false == "false"); // false
console.log(false == 0); // true
console.log(false == undefined); // false
console.log(false == null); // false
console.log(null == undefined); // true
console.log(" \t\r\n " == 0); // true

// 1. 先转换成基本类型比较
// 2. NaN 和任何类型比较永远都是false, 包括自身
// 3. Boolean和其他任何类型比较， Boolean会先转成Number
// 4. String 和 Number比较，会先将String转成Number
// 5. null == undefined比较是true 除此之外都是false
// 6. 引用类型 和 其他类型比较，引用类型会先转成基本类型去比较， 先调用valueOf 方法，  在调用 toString方法
// 7. undefined，字符串是一个非法的数字 转Number时会被转成NaN

// 数据类型        转String                   转Number                转Boolean
//  String        String                     Number || NaN           空字符=> false, 其他true
//  Number        String                     Number                  0, NaN => false, 其他true
//  Boolean       'true' || 'false'          true=> 1, false => 0   Boolean
//  undefined     'undefined'                NaN                    false
//  null          'null'                     0                      false
//  object        '[object Object]'          NaN                    true
//  Array          [] => '' || String        NaN || Number          true
