import {FallingChessman, Line, StepData} from './board.js' 
import {drawBoard, initDrawChessman} from './drawBoard.js'
export class Viewer { 
    allLayers // 所有图层
    boardLayer  // 象棋棋盘图层
    chessmanLayer // 棋子图层
    previewLayer // 预览图层
    ctx
    canvas
    currentChessman
    currentType = 'black'
    needRedraw = true
    isGeneral= false
    victory = false
    estimateEatChessman = null // 下一步可以吃掉的棋子
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

        this.initLayer()

        canvas.addEventListener('mouseenter',this.onMouseenter.bind(this), false)   // 移入
        canvas.addEventListener('mouseleave',this.onMouseleave, false)   // 移出
        canvas.addEventListener('mousemove',this.onMousemove, false)   // 移动
        canvas.addEventListener('click',this.onClick.bind(this), false)   // 点击 
    }


    initLayer(){
        this.estimateEatChessman = []
        this.victory = false
        this.currentType = 'black'
        this.isGeneral = false
        this.needRedraw = true
        this.allLayers.forEach(item => {
            item.removeAll()
        })

        drawBoard(this)
        initDrawChessman(this) 
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
        if(this.victory) return
        const x = event.offsetX 
        const y = event.offsetY 
        const obj = this.chessmanLayer.objects.find(obj =>{ 
            return obj.isPointInCircle(x, y)
        })

        if(obj === this.currentChessman){
            return 
        } 
        
        if( obj?.type === this.currentType  ){
            this.selected(obj)
            return
        }  

        const previewObj = this.previewLayer.objects.find(obj =>{ 
            return obj.isPointInCircle?.(x, y)
        })
        if(previewObj){ 
            const eatChessman = this.eatChessman(previewObj.position[0], previewObj.position[1]) 
            this.previewLayer.removeAll()
           const data= new StepData(this.currentChessman, [...this.currentChessman.position], eatChessman)

            this.currentChessman.setPosition(previewObj.position) // 将棋子移动到预览位置
            this.currentChessman = null
            this.currentType = this.currentType === 'red' ? 'black' : 'red'
            this.estimateEatChessman = []

           
            this.isGeneral = false
            this.refresh()
        }
    }
    selected(obj){
        this.currentChessman = obj
        obj._selected(this)
        this.previewLayer.removeAll()
        obj.selectedBorder.forEach(l => {
            this.previewLayer.add(new Line(...l))
        })
        obj.nextPositions.forEach(p => { 
            this.previewLayer.add(new FallingChessman(p)) 
        }) 
        this.estimateEat(obj)
        this.refresh()
    }

    estimateEat(obj){
         this.estimateEatChessman = []
         obj.nextPositions.forEach(([x, y]) => {
            const obj = this.chessmanLayer.seachByPosition(x, y)
            if(obj && obj.type !== this.currentType){
                // 将军
                if(obj.chessmanType === 'take'){
                    this.isGeneral = true
                }
                this.estimateEatChessman.push(obj)
            } 
        })

    }
    // 检查是否可以吃掉该位置的棋子
    eatChessman(x, y){
        const obj = this.estimateEatChessman.find(o => o.position[0] === x && o.position[1] === y) 
        
        
        if(obj){
            this.chessmanLayer.remove(obj)
            if(obj.chessmanType === 'take'){
                alert('胜利')
                this.victory = true
            }
        }
        return obj
    }
    layerDraw(layer) {
        layer.draw()
    }
    refresh(){
        window.requestAnimationFrame(this.draw.bind(this))
    }
    draw() { 
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height) // 将整个草图上的对象全部擦除
        this.allLayers.forEach(layer => {
            this.layerDraw(layer)
        })
    }
}

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

    // 根据坐标查找对象
    seachByPosition(x, y){
        return this.objects.find(o => o.position[0] === x && o.position[1] === y)
    }
    draw() {
        if (!this.visible) return
        this.objects.forEach(o => o.draw(this.viewer.ctx))
    }
}