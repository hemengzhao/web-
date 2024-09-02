// 方式一
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
const instanceDom1_1 = new Singleton();
const instanceDom1_2 = new Singleton();
console.log(
    "🚀 ~ file: 047.js:45 ~ instance2 === instance2:",
    instanceDom1_1 === instanceDom1_2
);

// 方式二
var Singleton2 = (function () {
    var instance;

    function createInstance() {
        var object = new Object("I am the instance");
        return object;
    }

    return {
        getInstance: function () {
            if (!instance) {
                instance = createInstance();
            }
            return instance;
        },
    };
})();

var instanceDom2_1 = Singleton2.getInstance();
var instanceDom2_2 = Singleton2.getInstance(); 
console.log(instanceDom2_1 === instanceDom2_2); // Output: true


// 方式三
const Singleton3 = (className) => {
    let instance = null; 
    return new Proxy(className, {
        construct: function (target, args) {
            if (instance === null) {
                instance = new target(...args);
            }
            return instance;
        },
    });
};

// 示例使用
class MyClass {
    constructor() {
        this.value = Math.random();
    }
}
const MySingletonClass = Singleton3(MyClass);
const a = new MySingletonClass();
const b = new MySingletonClass();
console.log(a === b); // 输出：true，表明 a 和 b 是同一个实例
console.log(a.value); // 输出一个随机数
console.log(b.value); // 输出与 a.value 相同的随机数，因为 a 和 b 是同一个实例