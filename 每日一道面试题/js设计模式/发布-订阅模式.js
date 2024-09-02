// 发布-订阅模式：
// 多对多关系：    发布-订阅模式允许多个发布者（Publisher）发送消息，而多个订阅者（Subscriber）根据兴趣订阅消息。发布者和订阅者之间没有直接的联系。
// 间接通信：      发布-订阅模式通过一个中介（通常称为事件通道、消息队列或事件总线）来实现通信。发布者发布消息到中介，订阅者从中介订阅消息。
// 基于主题或通道： 订阅者根据特定的主题或通道订阅消息，而不是订阅特定的发布者。这提供了更高的灵活性和解耦。
// 可扩展性：       由于其间接通信的特性，发布-订阅模式在处理大量发布者和订阅者时具有更好的可扩展性。
// 异步通信：       发布-订阅模式通常支持异步通信，这意味着消息的发布和订阅可以独立于彼此进行，有助于提高性能。

// on 订阅事件
// once 只执行一次发布订阅
// emit 发布
// off 取消订阅
class EventEmitter {
    #events
    constructor() {
        this.events = {};
    }
    on(name, callback) {
        if (this.events[name]) {
            this.events[name].push(callback)
        } else {
            this.events[name] = [callback]
        }
    }
    once(name, callback) {
        function fn(this) {
            callback();
            this.off(name, fn);
        }
        this.on(name, fn.bind(this));

    }
    emit(name, ...args) {
        if (this.events[name]?.length) {
            for (let i = 0; i < this.events[name].length; i++) {
                this.events[name][i](...args);
            }
        }
    }
    off(name, callback) {
        if (!this.events[name]?.length) return;
        if (callback) {
            this.events[name] = this.events[name].filter((item) => item !== callback);
        } else {
            this.events[name] = [];
        }
    }

}