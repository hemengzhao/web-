class Layer {
    visible
    objects
    name
    viewer
    constructor(name, viewer) {
        this.visible = true
        this.objects = []
        this.viewer = viewer
    }
    add(obj) {
        this.objects.push(obj)
    }
    remove(obj) {
        this.objects = this.objects.filter(o => o !== obj)
    }
    removeAll() {
        this.objects = []
    }
}

export class Viewer { 
    allLayers // 所有图层
    boardLayer  // 象棋棋盘图层
    chessmanLayer // 棋子图层
    previewLayer // 预览图层
    ctx
    canvas
    constructor(canvas) {
        this.allLayers = []
        this.canvas = canvas
        this.ctx = canvas.getContext('2d')
        this.boardLayer = new Layer('board', this)
        this.chessmanLayer = new Layer('chessman', this)
        this.previewLayer = new Layer('preview', this)
        this.allLayers.push(this.boardLayer)
        this.allLayers.push(this.chessmanLayer)
        this.allLayers.push(this.previewLayer)

        canvas.addEventListener('mouseenter',this.onMouseenter, false)   // 移入
        canvas.addEventListener('mouseleave',this.onMouseleave, false)   // 移出
        canvas.addEventListener('mousemove',this.onMousemove, false)   // 移动
        canvas.addEventListener('click',this.onClick, false)   // 点击

    }
    onMouseenter(e){
        e.preventDefault()
    }
    onMouseleave(e){
        e.preventDefault()
    }
    onMousemove(e){
        e.preventDefault()
    }
    onClick(event){
        event.preventDefault() 
        console.log("🚀 ~ Viewer ~ onClick ~ event:", event)
        const x = event.offsetX
       
        const y = event.offsetY
        console.log("🚀 ~ Viewer ~ onClick ~ x:", event.offsetX ,event.offsetY )
        
    }

    draw() {
        this.allLayers.forEach(layer => {
            if (layer.visible) {
                layer.objects.forEach(obj => {
                    obj.draw(this.ctx)
                })
            }
        })
    }
}

