// 策略模式（Strategy Pattern）是一种行为设计模式，
// 它定义了一系列算法，并将每一个算法封装起来，使它们可以互换使用，算法的变化不会影响使用算法的用户。
// 策略模式让算法独立于使用它的客户端而变化。
// 目的：将算法的使用和算法实现分离开来

// 优点：

// 利用组合、委托、多态等思想，可以解决多重条件选择语句问题
// 策略模式提供了对开放—封闭原则的完美支持，将算法封装在独立的strategy中，使得它们易于切换，易于理解，易于扩展
// 策略模式中的算法也可以复用在系统的其他地方，从而避免许多重复的复制粘贴工作
// 在策略模式中利用组合和委托来让 Context 拥有执行算法的能力，这也是继承的一种更轻便的替代方案
// 缺点：

// 代码会增加许多策略类和策略对象
// 需要全面了解各种 stragety, stragety要向客户暴露它的所有实现，违反最少知识原则

// 加减乘除

const add = {
    calculate: function(a, b){
        return a + b
    }
}

const subtract = {
    calculate: function(a, b){
        return a - b
    }
}

const multiply = {
    calculate: function(a, b){
        return a - b
    }
}

const  divide = {
    calculate: function(a, b){
        return a / b
    }
}


// 策略管理器，这里 Calculator 代表了 context，context 拥有执行不同算法的能力，传参为要执行的策略，context 持有对某个策略对象的引用
function Calculator(strategy) {
    this.strategy = strategy;
  
    this.setStrategy = function (newStrategy) {
      this.strategy = newStrategy;
    };
  
    this.calculate = function (a, b) {
      return this.strategy.calculate(a, b);
    };
  }

 // 使用
// 传入或设置不同的策略，执行结果函数得到结果
const calculator = new Calculator(add);
console.log(calculator.calculate(2, 3)); // 5

calculator.setStrategy(subtract);
console.log(calculator.calculate(2, 3)); // -1

calculator.setStrategy(multiply);
console.log(calculator.calculate(2, 3)); // 6

calculator.setStrategy(divide);
console.log(calculator.calculate(10, 5)); // 2