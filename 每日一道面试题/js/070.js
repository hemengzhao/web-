//  手写实现一下 lodash.get
function get(tageObject, path, defaultValue){

    // 判断 tageObject
    if(typeof tageObject !== 'object' || tageObject === null) return defaultValue

    // 归一化 path
    let pathArr = path
    if(!Array.isArray(path)){
        pathArr = path.replace(/\[/g, '.').replace(/\]/g, '').split('.');
    }

    // 计算结果
    return pathArr.reduce((acc, key) => {
        if(acc && acc.hasOwnProperty(key)){
            return acc[key]
        }
        return undefined
    }, tageObject) ?? defaultValue
}
let obj = {
    a: {
        b: [{c: 12}]
    }
}

console.log("🚀 ~ get:", get(obj, 'a[b][0][c]'))
console.log("🚀 ~ get:", get(obj, 'a.b[0][c].d', 26))