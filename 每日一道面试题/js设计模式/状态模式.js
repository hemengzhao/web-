// 状态模式（State Pattern）是一种行为设计模式，它允许一个对象在其内部状态改变时改变它的行为。
// 这个模式通过将状态相关的行为封装在不同的状态对象中，使得状态转换显式化，并集中管理状态转换的逻辑。

// 状态模式的优点包括：
//      局部化状态行为：每个状态相关的操作局部化在对应的状态对象中。
//      易于添加新状态：添加新状态时，只需要添加一个新的状态类，而不需要修改现有的代码。
//      避免庞大的条件分支：在没有状态模式的情况下，对象的状态变化可能会涉及到复杂的条件分支语句。

// 红绿灯状态切换

const redLight = {
    name: '红灯', 
    nextLight: () => {
        return greenLight
    }
}


const yellowLight = {
    name: '黄灯', 
    nextLight: () => {
        return redLight
    }
}


const greenLight = {
    name: '绿灯', 
    nextLight: () => {
        return yellowLight
    }
}

// 状态管理器
function TrafficLightManager(initialState) {
    this.state = initialState;
  
    this.changeState = function () {
      this.state = this.state.nextLight();
    };
  }

  // 使用
// 传入初始状态
const trafficLight = new TrafficLightManager(redLight);

console.log(trafficLight.state.name); // 红灯

trafficLight.changeState()
console.log(trafficLight.state.name); // 绿灯


trafficLight.changeState()
console.log(trafficLight.state.name); // 黄灯


class StateLight {
    name; 
    constructor(name){
        this.name = name
    }
    changeState(){
        throw new Error('changeState method must be implemented');
    }
}


class RedStateLight  extends StateLight{
    constructor(){
        super('红灯')
    }

    changeState(){ 
        return new GreenStateLight() 
    }
}


class YellowStateLight extends StateLight{
    constructor(){
        super('黄灯')
    }

    changeState(){ 
        return new RedStateLight()
    }
}


class GreenStateLight extends StateLight{
    constructor(){
        super('绿灯')
    }

    changeState(){ 
        return new YellowStateLight()
    }
}


class TrafficLights{
    light;
    constructor(){
        this.light = new YellowStateLight()
    }
    nextLight(){
        this.light =  this.light.changeState() 
    }

    getLight() {
        return this.light;
    }
}

const trafficLights = new TrafficLights();
console.log("🚀 ~ Initial Light:", trafficLights.getLight().name);
trafficLights.nextLight();
console.log("🚀 ~ Next Light:", trafficLights.getLight().name );
trafficLights.nextLight();
console.log("🚀 ~ Next Light:", trafficLights.getLight().name );
trafficLights.nextLight();
console.log("🚀 ~ Next Light:", trafficLights.getLight().name);
