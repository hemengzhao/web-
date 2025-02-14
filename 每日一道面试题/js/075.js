const freezeObj = {
    name: '张三',
    age: 18,
    info: {
        are: 123,
        phone: 18137930317
    },
    live: ['北京', '上海', '广州']
}
const sealObj = {
    name: '张三',
    age: 18,
    info: {
        are: 123,
        phone: 18137930317
    },
    live: ['北京', '上海', '广州']
} 

const preventExtensionObj = {
    name: '张三',
    age: 18,
    info: {
        are: 123,
        phone: 18137930317
    },
    live: ['北京', '上海', '广州']
}

Object.freeze(freezeObj)
Object.seal(sealObj)
Object.preventExtensions(preventExtensionObj)
 
freezeObj.name = '李四'
freezeObj.info.phone = 123456789
freezeObj.live.push('深圳')
freezeObj.date = new Date()

const freezeObjPrototype = {date: new Date()}
// 设置freezeObj原型对象
Object.setPrototypeOf(freezeObj, freezeObjPrototype)
freezeObjPrototype.newDateSte = 'qwqw'



sealObj.name = '李四'
sealObj.info.phone = 123456789
sealObj.live.push('深圳')
sealObj.date = new Date()

delete sealObj.name
// preventExtensionObj.name = '李四'
// preventExtensionObj.info.phone = 123456789
// preventExtensionObj.live.push('深圳')

console.log(freezeObj) 