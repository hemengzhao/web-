const routers = [ {
  name: '单项基础评估',
  path: '/evaluation/singleBasis',
  component: './evaluation/singleBasis',
  access: '/evaluation/singleBasis',
},
{
  name: '能力评估受理',
  path: '/evaluation/acceptance',
  component: './evaluation/acceptance',
  access: '/evaluation/acceptance',
},
{
  name: '能力评估待处理',
  path: '/evaluation/acceptancePending',
  component: './evaluation/acceptancePending',
  access: '/evaluation/acceptancePending',
},
{
  name: '能力评估结果',
  path: '/evaluation/acceptanceResult',
  component: './evaluation/acceptanceResult',
  access: '/evaluation/acceptanceResult',
}]


type RoutersObj<T extends Object> = {
  [k in keyof T]: T[K] extends {path: infer U} ? U : never
}[keyof T]

type MenusType ={
  title: string
  to: RoutersObj<routers>
}
const  menus: MenusType[] = [{
  title: '单项基础评估', to: '/evaluation/singleBasis',
 
}, {
  title: '12', to: '',
}]   