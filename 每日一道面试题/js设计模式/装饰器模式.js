// 定义：
// 装饰器模式（Decorator Pattern）是一种结构型设计模式，用于在不改变原有对象的基础上，动态地给对象添加功能或职责。它通过在运行时包装对象来增加新的行为，从而提供了一种灵活的方式来扩展对象的功能
// 装饰器模式包括两种主要角色：被装饰者（Component）和装饰者（Decorator）
// 被装饰者是一个接口或抽象类，定义了可以添加装饰的对象的接口。
// 装饰者则实现了与被装饰者相同的接口，并持有一个指向被装饰者的引用。
// 装饰者可以在其方法中调用被装饰者的方法，从而在被装饰者的行为之前或之后添加新的行为。

// 特色和用途：
// 扩展性：装饰器模式通过一种对客户端透明的方式来扩展对象的功能，而无需修改现有代码。这使得你可以逐步添加或修改功能，而不会影响到已有的代码。
// 简化代码：装饰器模式避免了创建大量相关子类的情况，通过组合和委托来达到增加功能的目的，从而使代码更加清晰和易于维护。
// 灵活性：可以根据需要动态地、不限量地使用多个装饰器来包装对象。每个装饰器独立工作，不依赖于其他装饰器的存在。
// 符合开闭原则：装饰器模式支持开放-封闭原则，即可以在不修改现有代码的情况下，引入新的装饰器来扩展功能。

// 实际应用：
// 动态地给对象添加功能：例如在运行时对对象添加日志、验证、缓存等功能，而不需要修改原始类的代码。
// 避免创建大量子类：通过装饰器可以避免为每一种组合创建一个子类，从而简化类的继承结构。

//   class式

 // 定义自行车接口
 class Bicycle {
    assemble() {
      return "Bicycle";
    }
  }

  // 装饰器基类
  class BicycleDecorator {
    constructor(bicycle) {
      this.bicycle = bicycle;
    }

    assemble() {
      return this.bicycle.assemble();
    }
  }

  // 具体的装饰器类 - 前灯
  class HeadlightDecorator extends BicycleDecorator {
    constructor(bicycle) {
      super(bicycle);
    }

    assemble() {
      return `${this.bicycle.assemble()} with Headlight`;
    }
  }

  // 具体的装饰器类 - 尾灯
  class TaillightDecorator extends BicycleDecorator {
    constructor(bicycle) {
      super(bicycle);
    }

    assemble() {
      return `${this.bicycle.assemble()} with Taillight`;
    }
  }

  // 具体的装饰器类 - 铃铛
  class BellDecorator extends BicycleDecorator {
    constructor(bicycle) {
      super(bicycle);
    }

    assemble() {
      return `${this.bicycle.assemble()} with Bell`;
    }
  }

  const basicBicycle = new Bicycle();

  // 添加前灯
  const bicycleWithHeadlight = new HeadlightDecorator(basicBicycle);
  console.log(bicycleWithHeadlight.assemble());

  // 添加尾灯
  const bicycleWithTaillight = new TaillightDecorator(basicBicycle);
  console.log(bicycleWithTaillight.assemble());

  // 添加铃铛
  const bicycleWithBell = new BellDecorator(basicBicycle);
  console.log(bicycleWithBell.assemble());

  // 同时添加多种装饰器
  const bicycleWithAllAccessories = new BellDecorator(
    new TaillightDecorator(new HeadlightDecorator(basicBicycle))
  );
  console.log(bicycleWithAllAccessories.assemble()); 




//   函数式

// 原始组件
function Component() {
    this.description = function() {
        return "Basic component";
    };
}

// 装饰器函数
function LoggingComponent(component) {
    return function() {
        console.log("Logging before");
        const result = component.description();
        console.log("Logging after");
        return result;
    };
}

// 创建原始组件
const basicComponent = new Component();

// 应用装饰器
const enhancedComponent = LoggingComponent(basicComponent.description);

// 使用增强后的组件
console.log(enhancedComponent()); // 输出: Logging before, Logging after, Basic component