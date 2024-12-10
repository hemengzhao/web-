
// 防抖函数类型推断
// function debounceA<A extends any[], R>(callback: (...args: A) => R, time: number = 300): (...args: A) => void {
//     let timeId: number | null = null;
//     return function (...args: A) {
//         if (timeId) clearTimeout(timeId);
//         timeId = window.setTimeout(() => {
//             callback.apply(this, args);
//             timeId = null;
//         }, time);
//     };
// }

declare function debounce<A extends any[], R>(
    fn: (...args: A) => R, 
    time?: number
): (...args: A) => void;
 
function handler(a: number, b: number): number{
    return a + b
}

const dHandler = debounce(handler, 100);
dHandler(2, 3)


/**   ===================================================================================== **/ 

// 函数柯里化标注
// 1. () => R 没有参数的情况
// 2. (x) => R  只有一个参数的情况
// 3. (x) => 新的函数   由多个参数结果再次返回一个新的函数
type currIed<A, R> = A extends [] ? 
() => R : 
A extends [infer ARG, ...infer OTHER] ? 
(parm: ARG) => currIed<OTHER, R> : 
 never


declare function curry<A extends any[], R>(
    fn:(...ages: A) => R
): currIed<A, R>;


function sum(a: string, b: number, c: 1, d: string) {
    return '122'
}

const currySum = curry(sum)

currySum('1')(12)(1)('12')
export default void 0


/**   ===================================================================================== **/ 

//  ts 类型推断定义
const colors =['♠', '♥', '♣', '♦'] as const
const values = ['2', '3', '4', '5','6','7', '8', '9', '10', 'J','Q', 'K', 'A'] as const

type Colors = typeof colors[number]
type Values = typeof values[number]


function createCard(values: Values, colors: Colors) {
    
}
createCard('10', '♦')



/**   ===================================================================================== **/ 

//  TS  字段到函数推导
type Watcher<T> = {
    on<K extends string & keyof T>(name: `${K}Change`, callback: (oldValue: T[K], newValue: T[K]) => void): void
}
declare function watch<T>(obj: T): Watcher<T>;
 
const personWatch = watch({
    name: '张三',
    age: 12,
    sex: '男'
}) 
personWatch.on('ageChange', (oldValue, newValue) => {

})

/**   ===================================================================================== **/ 

// 不可变类型
// Readonly 本身不支持深层的不可变 
interface Obj {
    a: number
    b: boolean
    c: {
        d: number
    }
}

const  obj: Readonly<Obj>  =  {
    a: 2,
    b:true,
    c: {
        d: 4
    }
} 
obj.c.d = 3

// 自行实现深层不可变
type DeepReadonly<T extends Record<string | symbol, any>> = {
    readonly [K in keyof T]: DeepReadonly<T[K]>
}
const  obj2: DeepReadonly<Obj>  =  {
    a: 2,
    b: false,
    c: {
        d: 4
    }
} 

obj2.a = 2
obj2.c.d = 3

/**   ===================================================================================== **/ 
type TAny = keyof any