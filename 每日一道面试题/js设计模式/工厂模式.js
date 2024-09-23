// 工厂模式（Factory Pattern）

// 优点
// 良好的封装，代码结构清晰，访问者无需知道对象的创建流程，特别是创建比较复杂的情况下；
// 扩展性优良，通过工厂方法隔离了用户和创建流程隔离，符合开放封闭原则；
// 解耦了高层逻辑和底层产品类，符合最少知识原则，不需要的就不要去交流；

// 缺点
// 带来了额外的系统复杂度，增加了抽象性；

// 函数式
// 产品类
function Rectangle(width, height) {
  this.width = width;
  this.height = height;
  this.getColor = function () {
    return "红色";
  };
}

function Square(width) {
  this.width = width;
  this.height = width; // 正方形的宽高相等
  this.getColor = function () {
    return "蓝色";
  };
}

// 工厂函数
function ShapeFactory(type) {
  var obj = null;
  switch (type) {
    case "Rectangle":
      obj = new Rectangle(5, 10);
      break;
    case "Square":
      obj = new Square(5);
      break;
    default:
      break;
  }
  return obj;
}

// 使用工厂模式创建对象
var shapeType = "Rectangle"; // 假设这个值是从用户输入或其他来源获取的
var shape = ShapeFactory(shapeType);
console.log(shape.getColor()); // 输出: 红色





// ES6中，你可以使用类来实现工厂模式
// 产品类
class Rectangle {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }

  getColor() {
    return "红色";
  }
}

class Square {
  constructor(width) {
    this.width = width;
    this.height = width; // 正方形的宽高相等
  }

  getColor() {
    return "蓝色";
  }
}

// 工厂类
class ShapeFactory {
  static createShape(type) {
    let shape;
    switch (type) {
      case "Rectangle":
        shape = new Rectangle(5, 10);
        break;
      case "Square":
        shape = new Square(5);
        break;
      default:
        throw new Error("Unknown shape type");
    }
    return shape;
  }
}

// 使用工厂模式创建对象
const shapeType = "Square"; // 假设这个值是从用户输入或其他来源获取的
const shape = ShapeFactory.createShape(shapeType);
console.log(shape.getColor()); // 输出: 蓝色
