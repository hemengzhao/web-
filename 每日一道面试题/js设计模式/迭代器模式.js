// 迭代器模式概述
// 迭代器模式是指提供一种方法顺序访问一个聚合对象中的各个元素，而又不需要暴露该对象的内部表示。迭代器模式可以把迭代的过程从业务逻辑中分离出来，在使用迭代器模式之后，即使不关心对象的内部构造，也可以按顺序访问其中的每个元素。
// 在JavaScript中，迭代器模式通常与数组或类数组对象（如 NodeList、arguments 等）一起使用。
// JavaScript的数组内置了迭代器协议，这意味着数组对象具有 Symbol.iterator 方法，可以创建一个迭代器来遍历数组。

// 聚合对象
function Aggregate() {
    this.items = [];
}

Aggregate.prototype.add = function(item) {
    this.items.push(item);
};

Aggregate.prototype[Symbol.iterator] = function() {
    let index = 0;
    const items = this.items;
    return {
        next: function() {
            if (index < items.length) {
                return { value: items[index++], done: false };
            } else {
                return { done: true };
            }
        }
    };
};


// 迭代器
function Iterator(aggregate) {
    this.aggregate = aggregate;
}

Iterator.prototype.next = function() {
    return this.aggregate[Symbol.iterator]().next();
};

// 使用迭代器模式
const aggregate = new Aggregate();
aggregate.add('Item 1');
aggregate.add('Item 2');
aggregate.add('Item 3');

const iterator = new Iterator(aggregate);

console.log(iterator.next().value); // 输出: Item 1
console.log(iterator.next().value); // 输出: Item 2
console.log(iterator.next().value); // 输出: Item 3
console.log(iterator.next().done);   // 输出: true