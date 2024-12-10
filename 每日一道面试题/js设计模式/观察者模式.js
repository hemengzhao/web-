// 观察者模式：
// 一对多关系：  观察者模式定义了对象之间的一对多依赖，当一个对象（被观察者）的状态发生变化时，所有依赖于它的对象（观察者）都会得到通知。
// 直接通信：     在观察者模式中，被观察者直接维护观察者列表，并直接通知它们。这意味着观察者和被观察者之间存在直接的耦合。
// 状态变化通知： 通常，观察者模式用于当被观察者的状态发生变化时通知观察者。
// 实现简单：     观察者模式的实现相对简单，通常只需要几个方法来管理观察者列表和通知观察者。
 
// 被观察者（Subject）
class subject {
    #observers
    constructor() {
        this.observers = [];
    }

    // 注册观察者
    addObserver(observer) {
        this.observers.push(observer)
    }

    // 移除观察者
    removeObserver(observer) {
        const index = this.observers.indexOf(observer);
        if (index > -1) {
            this.observers.splice(index, 1);
        }
    }

    // 通知观察者
    notify(data) {
        this.observers.forEach(observer => observer.update(data));
    }
}

// 观察者（Observer）
class Observer {
    constructor(name) {
        this.name = name;
    }

    update(data) {
        console.log(`${this.name} received data: ${data}`);
    }
}

// 使用示例
const subject = new Subject();

const observer1 = new Observer('Observer 1');
const observer2 = new Observer('Observer 2');

subject.addObserver(observer1);
subject.addObserver(observer2);

subject.notify('Hello, Observers!');
// 输出：
// Observer 1 received data: Hello, Observers!
// Observer 2 received data: Hello, Observers!

subject.removeObserver(observer1);
subject.notify('Another update');
// 输出：
// Observer 2 received data: Another update



// 函数方式
// function Subject() {
//     this.observers = [];
//   }

//   Subject.prototype.subscribe = function (observer) {
//     this.observers.push(observer);
//   };

//   Subject.prototype.unsubscribe = function (observer) {
//     var index = this.observers.indexOf(observer);
//     if (index !== -1) {
//       this.observers.splice(index, 1);
//     }
//   };

//   Subject.prototype.notify = function () {
//     for (var i = 0; i < this.observers.length; i++) {
//       this.observers[i].update();
//     }
//   };

//   function Observer(name) {
//     this.name = name;
//   }

//   Observer.prototype.update = function () {
//     console.log(this.name + " received an update");
//   };

//   var subject = new Subject();

//   var observer1 = new Observer("Observer 1");
//   var observer2 = new Observer("Observer 2");
//   var observer3 = new Observer("Observer 3");

//   subject.subscribe(observer1);
//   subject.subscribe(observer2);
//   subject.subscribe(observer3);

//   subject.notify();
