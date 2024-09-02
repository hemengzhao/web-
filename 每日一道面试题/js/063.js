 
function closure (){
    let obj = {
        a:1,
        b: 2,
    }

    // 防止闭包私有变量被修改 方式一
    // 暴力解决 修改原型对象
    // Object.setPrototypeOf(obj, null)  

    // 暴力解决方式二
    // 创建一个没有原型的对象
    // let obj = Object.create(null)
    // obj.a = 1
    // obj.b = 2
    return {
        get(key){ 
            // 防止闭包私有变量被修改 方式二
            // 判断是不是自有属性
            if(obj.hasOwnProperty(key)) return obj[key]
            
            // return obj[key]
        }
    }
}

const a = closure()

// 修改闭包内的私有变量 
 Object.defineProperty(Object.prototype, 'has', {
    get(){
        this.a = 11
        return this
    }
 })
console.log("🚀 ~ a:", a.get('has'))