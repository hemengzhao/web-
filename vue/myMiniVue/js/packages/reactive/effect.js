
let activeEffect = undefined

export function effect(fn, optios) {
    const _effect = new CreateReactiveEffect(fn, () => {
        _effect.run()
    })
    _effect.run()
    return _effect
}

export class CreateReactiveEffect {
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
            return this.fn()
        } finally {
             // 清空依赖收集     // activeEffect = undefined 
            activeEffect = undefined
        } 
    }
}