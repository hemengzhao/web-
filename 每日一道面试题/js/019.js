/**
 * 你了解的javascript数据结构
 * javascript 自身有（数组 / 对象 / 集合 / 映射） 这几种数据结构
 * */

// 1. 数组（Array）
//  有序的集合，可以包含不同类型的数据，通过索引访问元素
// 2. 对象（Object）
// 无序的键值对集合。每个键都是唯一的
// 3.集合 （Set）
// 一种特殊的数据结构，包含一组唯一且无序的元素
// 4. 映射（Map）
// 一种键值对的集合，可以使用键来访问对应的值。

// 5. 栈（Stack）
// JavaScript中没有这种数据结构，可以用Array实现栈的功能
// 后进先出（LIFO）的数据结构，只允许在一端进行操作。
// 通常用数组模拟实现，可以使用push和pop方法。
//

// 6. 队列 （Queue）
// JavaScript中没有队列这个数据结构，但是可以用数组来实现所有的功能。
// 先进先出（FIFO）的数据结构，可以在一端添加元素，在另一端删除元素。
// 通常用数组模拟实现，可以使用push和shift方法。

// 7. 树 （Tree）
// javascript中没有树这个数据结构，但是一般用object和arrey来模拟树
// 分层次的数据结构，由节点组成，每个节点可以有零个或多个子节点。 例如：二叉树、二叉搜索树、AVL树。

// 8. 堆（Heap）
// 堆是一种特殊的完全二叉树
// 一种特殊的树形数据结构，满足堆属性，通常用于实现优先队列。

// 9.链表（Linked List）
// JavaScript中没有链表，但是可以用object来模拟链表
// 一种由节点组成的线性数据结构，每个节点包含数据和指向下一个节点的指针。

class Stack {
  constructor() {
    this.stack = [];
  }
  push(item) {
    this.stack.push(item);
  }
  pop() {
    return this.stack.pop();
  }
  peek() {
    return this.stack[this.stack.length - 1];
  }

  isEmpty() {
    return this.stack.length === 0;
  }
  clear() {
    this.stack = [];
  }
  size() {
    return this.stack.length;
  }
}
class Queue {
  constructor() {
    this.queue = [];
  }
  // 入队
  enqueue(value) {
    this.queue.push(value);
  }

  // 出队
  dequeue() {
    if (this.isEmpty()) {
      return null;
    }
    return this.queue.shift();
  }

  // 查看队头元素
  peek() {
    if (this.isEmpty()) {
      return null;
    }
    return this.queue[0];
  }

  // 检查队列是否为空
  isEmpty() {
    return this.queue.length === 0;
  }

  // 获取队列长度
  size() {
    return this.queue.length;
  }
}
