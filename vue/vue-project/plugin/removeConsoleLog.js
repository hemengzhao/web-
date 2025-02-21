// import { parse } from '@babel/parser'
// import traverse from '@babel/traverse'
// import generate from '@babel/generator'
// import { createFilter } from 'vite'

// export default function removeConsoleLog(options = {}) {
//   // 配置选项处理
//   const {
//     include = ['**/*.js', '**/*.ts', '**/*.jsx', '**/*.tsx'],
//     exclude = [],
//     methods = ['log'],
//     preview = false
//   } = options

//   // 创建文件过滤器
//   const filter = createFilter(include, exclude)

//   return {
//     name: 'vite-plugin-remove-console-log',
//     enforce: 'pre',

//     transform(code, id) { 
//       console.log("🚀 ~ transform ~ id:", id,  )
//       if (!filter(id)) return

//       try {
//         // 解析为 AST
//         const ast = parse(code, {
//           sourceType: 'module',
//           plugins: ['typescript', 'jsx']
//         })

//         let removed = false

//         // AST 遍历
//         traverse(ast, {
//           CallExpression(path) {
//             const callee = path.node.callee
         
//             if (
//               callee.object &&
//               callee.object.name === 'console' &&
//               methods.includes(callee.property.name)
//             ) {
//               // 移除匹配的 console 调用
//               if (path.parentPath.isExpressionStatement()) {
//                 removed = true
//                 path.parentPath.remove()
//               } else if (preview) {
//                 // 预览模式用空函数替换
//                 path.replaceWith(
//                   t.arrowFunctionExpression([], t.blockStatement([]))
//                 )
//               }
//             }
//           }
//         })

//         if (removed || preview) {
//           // 生成新代码
//           const result = generate(ast, {
//             retainLines: false,
//             compact: false,
//             sourceMaps: true,
//             sourceFileName: id
//           })

//           return {
//             code: result.code,
//             map: result.map
//           }
//         }
//       } catch (e) {
//         console.error('Error processing file:', id)
//         console.error(e)
//       }
//     }
//   }
// }

var isPalindrome = function(x) {
        if(x < 0) return false
        let str = x.toString()
        let left = 0
        let right = str.length - 1
        while(left < right) {
            if(str[left] !== str[right]) {
                return false
            }
            left++
            right--
        }
        return true
};