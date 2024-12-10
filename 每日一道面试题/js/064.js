
// class Example {
//     constructor(name){
//         this.name = name;
//     }
//     function() {
//         console.log(this.name);
//     }
// }

"use strict"; // 开启严格模式
function Example (name){
    // 只能通过new使用
    if(!new.target){
        throw new TypeError(`Class constructor Example cannot be invoked without 'new'`)
    }
    this.name = name;
}

Object.defineProperty(Example.prototype, 'function', {
    value: function(){
        // 内部方法不能通new
        if(new.target){
            throw new TypeError(
                `example.function is not a constructor`
            )
        }
        console.log(this.name);
    },
    enumerable: false //  不可枚举
})


