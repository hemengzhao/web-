 
/**
 * 
 *                     添加新属性             删除属性         修改属性值      递归处理               原型链影响     返回值
 * freeze               禁止                 禁止               禁止          递归冻结所有自有属性    不影响        冻结后的对象
 *  
 * seal                 禁止                  禁止              不禁止        不递归处理嵌套属性      不影响        密封后的对象
 *
 * preventExtensions    禁止                  不禁止            不禁止         不递归处理嵌套属性     不影响         不可扩展的对象
 * 
 * 严格性排序：freeze > seal > preventExtensions
 * 递归处理：仅 freeze 会递归冻结嵌套对象。
 * 删除属性：仅 freeze 和 seal 禁止删除，preventExtensions 允许。
 * 修改值：仅 freeze 禁止修改值
 * */ 

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