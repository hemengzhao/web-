// 用于规范开发请求方法必须用get或者send开头
// js代码解析 - ast语法树
module.exports = {
  create(context) {
    return {
      ReturnStatement(node) {
        if (node.argument?.callee.name === 'axios') {
          const fnName = node?.parent?.parent?.id.name
          console.log('🚀 ~ ReturnStatement ~ fnName:', fnName)
          const result = fnName.startsWith('get') || fnName.startsWith('send')
          if (!result) {
            context.report({
              node,
              message: '请求方法必须以get或者send开头',
            })
          }
        }
      },
    }
  },
}
