// 用一个一个函数实现const

function myConst(value){
     const constant = {val: value}   
     Object.defineProperty(constant, 'val', {
        writable: false, // 不可修改
        configurable: false, // 不可重新配置
        enumerable: true // 可枚举
     })
    return function(){
        return constant.val
    }
}