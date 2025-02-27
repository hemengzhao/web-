
export let activeEffect = undefined
const effectStack = []

export function effect(fn, optios) {
    const _effect = new CreateReactiveEffect(fn, () => {
        _effect.run()
    })
    _effect.run()
    return _effect
}
function preCleamEffect(effect) {
    effect._dpesLength = 0
    effect._tackId++ // 每次执行id都会加1， 如果当前同一个effect执行，id就是相同
}
function cleanDeoEffect(dep, effect){
    dep.delete(effect)
    if(dep.size === 0) {
        dep.cleanup()  // 如果当前依赖收集器没有依赖了， 就删除这个依赖收集器
    }
}

export class CreateReactiveEffect {
    _tackId = 0
    _dpesLength = 0
    constructor(fn, scheduler) {
        this.fn = fn
        this.scheduler = scheduler
        this.active = true
        this.deps = []
    }
    run() {
        if (!this.active) {
            return this.fn()
        } 
        try {
            // 依赖收集
            activeEffect = this 
            effectStack.push(activeEffect) 
            preCleamEffect(this)
            return this.fn()
        } finally {
             // 清空依赖收集     // activeEffect = undefined 
            activeEffect = effectStack.pop()

        } 
    }
}

const targetMap = new WeakMap() // 存放依赖收集的关系

export function creatDep(cleanup, key) {
    const dep = new Map() // 创建一个收集器
    dep.cleanup = cleanup
    dep.name = key // 自定义为的为标识指着映射表是给那属性服务的
    return dep
}


export function track(target, key) {
    if (!activeEffect) return
    let depsMap = targetMap.get(target)
    if (!depsMap) {
        depsMap = new Map()
        targetMap.set(target, depsMap)
    }
    let dep = depsMap.get(key)
    if (!dep) {
    //    3.4 之前写法是dep 用的 Set， 之后改成MAP
        depsMap.set(key, dep = creatDep(() => {
            depsMap.delete(key)
        }, key))
    }

    // 将当前的 effect 收集到 dep 中，
     trackEffects(activeEffect, dep) 
}

export function trackEffects(effect, dep) {
    if (dep.has(effect)) return
    // _tackId 用于记录执行次数，（防止一个属性在当前effect中多次依赖收集）
    // 拿到上一次依赖最后一个和这次的比较
    if(dep.get(effect) !== effect._tackId)  {
        dep.set(effect, effect._tackId)
        const oldDep = effect.deps[effect._dpesLength]

        // 如果没有存过
        if(oldDep !== dep) {

            // 老的如果有就删除
            if(oldDep) {
                cleanDeoEffect(oldDep, effect)
            }

            // 换成新的存进去

            effect.deps[effect._dpesLength++] = dep
        } else {
            effect._dpesLength++
        }
    }

}
 
export function trigger(target, key, newValue, obdValue) {
    const depsMap = targetMap.get(target)
    if (!depsMap) return
    const dep = depsMap.get(key)
    if (!dep) return
    triggerEffects(dep)
}

export function triggerEffects(dep) { 
    for (const effect of dep.keys()) {
        if (effect.scheduler) {
            effect.scheduler()
        } else {
            effect.run()
        }
    }
}