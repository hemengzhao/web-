class Person {
  constructor(name) {
    this.name = name;
    this.say1 = () => {
      return this.name;
    };
  }
  say2() {
    return this.name;
  }
}

const A = new Person("实例A");
const B = new Person("实例B");

console.log("🚀 ~ A.say1 === say1;:", A.say1 === B.say1); // false
console.log("🚀 ~ A.say1 === say1;:", A.say2 === B.say2); // true
// 在构造函数(constructor) 内部定义的方法(例如say1) 是各个实例对象独有的。
// 在构造函数(constructor)外部定义的方法(例如say2)，所有Person实例共享的(存在原型链上)。

// 在构造函数 (constructor) 内部定义的方法可以被Object.keys ()遍历。
// 在构造函数(constructor)外部定义的方法(例如say2)，不能被Object.keys()遍历。
