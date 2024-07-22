
// 防抖函数类型推断

declare function debounce<A extends any[], R>(
    fn: (...args: A) => R, 
    time?: number
): (...args: A) => void;
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
function handler(a: number, b: number): number{
    return a + b
}

const dHandler = debounce(handler, 100);
dHandler(2, 3)


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