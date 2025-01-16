import { BOARD_MARGIN, CELL_SIZE, CHESSMAN_RADIUS,  blackChessman, redChessman } from './const.js';


// 棋子基类
export class Chessman {
    type // black  黑  red 红 
    chessman // chessmanEnmu
    chessmanType
    rule
    position // 棋子位置
    coordinate // 棋子坐标
    status // 棋子状态   0 被吃 1 正常  2 被选中 3 被将军
    nextPositions
    constructor(type, chessmanType, position) {
        this.chessmanType = chessmanType
        this.type = type
        this.position = position
        this.coordinate = [BOARD_MARGIN + position[0] * CELL_SIZE, BOARD_MARGIN + position[1] * CELL_SIZE]
        this.chessman = type === 'black' ? blackChessman[chessmanType].name : redChessman[chessmanType].name
    }
        
    get selectedBorder(){
        const [x, y] = this.position
        // 计算中心点坐标
        const centerX = BOARD_MARGIN + x * CELL_SIZE;
        const centerY = BOARD_MARGIN + y * CELL_SIZE; 
        const BASS = CHESSMAN_RADIUS + 2
        const leftTop = [centerX  - BASS, centerY - BASS]
        const rightTop = [centerX +  BASS, centerY  - BASS]
        const rightBottom = [centerX  + BASS, centerY + BASS]
        const leftBottom = [centerX  - BASS, centerY + BASS]

        // 四个角标框 恭8条线段

        return  [
            [...leftTop, centerX  - BASS / 2, centerY - BASS],
            [...leftTop, centerX  - BASS, centerY - BASS / 2],

            [...rightTop, centerX  + BASS / 2, centerY - BASS],
            [...rightTop, centerX  + BASS, centerY - BASS / 2],

            [...rightBottom, centerX  + BASS / 2, centerY + BASS],
            [...rightBottom, centerX  + BASS, centerY + BASS / 2],

            [...leftBottom, centerX  - BASS / 2, centerY + BASS],
            [...leftBottom, centerX  - BASS, centerY + BASS / 2], 
        ]
    }

    /**
     * 绘制棋子
     * @param {CanvasRenderingContext2D} ctx - Canvas上下文
     * @param {number} x - 棋子x坐标
     * @param {number} y - 棋子y坐标
     * @param {string} type - 棋子类型（'black' | 'white'）
     * @param {Object} options - 配置选项
     */
    draw(ctx, options = {}) { 
        const [x, y] = this.position

        // 默认配置
        const {
            radius = CHESSMAN_RADIUS, // 棋子半径
                borderWidth = 1, // 边框宽度
                shadowBlur = 3, // 阴影模糊度
                shadowOffsetX = 2, // 阴影X偏移
                shadowOffsetY = 2, // 阴影Y偏移
                gradientStart = 0.3, // 渐变开始位置
                gradientEnd = 0.7, // 渐变结束位置
                highlightOffset = 3, // 高光偏移 
                isHovered = false // 是否悬停
        } = options;

        // 计算中心点坐标
        const centerX = BOARD_MARGIN + x * CELL_SIZE;
        const centerY = BOARD_MARGIN + y * CELL_SIZE;

        // 保存当前状态
        ctx.save();

        try {
            // 创建棋子渐变
            const gradient = ctx.createRadialGradient(
                centerX - highlightOffset,
                centerY - highlightOffset,
                radius * gradientStart,
                centerX,
                centerY,
                radius
            );

            // 设置渐变颜色
            if (this.type === 'black') {
                gradient.addColorStop(0, '#fff');
                gradient.addColorStop(1, '#fff');
            } else {
                gradient.addColorStop(0, '#fff');
                gradient.addColorStop(1, '#fff');
            }

            // 设置阴影
            ctx.shadowColor = 'rgba(0, 0, 0, 0.4)';
            ctx.shadowBlur = shadowBlur;
            ctx.shadowOffsetX = shadowOffsetX;
            ctx.shadowOffsetY = shadowOffsetY;

            // 绘制主体
            ctx.beginPath();
            ctx.arc(centerX, centerY, radius, 0, Math.PI * 2);
            ctx.fillStyle = gradient;
            ctx.fill();

            // 绘制边框
            if (borderWidth > 0) {
                ctx.strokeStyle = this.type === 'black' ? '#000' : '#ccc';
                ctx.lineWidth = borderWidth;
                ctx.stroke();
            }
 

            // 如果是悬停状态，绘制高亮效果
            if (isHovered) {
                ctx.beginPath();
                ctx.arc(centerX, centerY, radius + 2, 0, Math.PI * 2);
                ctx.strokeStyle = 'rgba(255, 255, 0, 0.5)';
                ctx.lineWidth = 2;
                ctx.stroke();
            }
            ctx.font = '30px Arial';
            ctx.fillStyle = this.type === 'black' ? '#000' : 'red'
            ctx.fillText(this.chessman, centerX - 15, centerY + 12);
            
        } finally {
            // 恢复状态
            ctx.restore();
        }
        // 返回棋子的碰撞检测区域
        return {
            x: centerX - radius,
            y: centerY - radius,
            width: radius * 2,
            height: radius * 2
        };
    }
    setPosition(position){
        console.log("🚀 ~ Chessman ~ setsetPosition ~ position:", position)
        const [x, y] = position
        this.position = position
        this.coordinate = [BOARD_MARGIN + x * CELL_SIZE, BOARD_MARGIN + y * CELL_SIZE]
    }

    nextLuozi(){}

    _selected(viewer) {
        this.status = 2; 
        this.nextLuozi(viewer)
    }

    isPointInCircle(x, y){  
        // 计算点到圆心的距离
        const distance = Math.sqrt(
            Math.pow(x - this.coordinate[0], 2) + Math.pow(y - this.coordinate[1], 2)
        ); 
        // 比较距离和半径
        return distance < CHESSMAN_RADIUS;
    }
} 

// 兵
export class SoldierChessman extends Chessman {
    constructor(type, position) {
        super(type, 'soldier', position)
    }
    nextLuozi(){
        const [x,y] = this.position
        const forward = this.type === 'black' ? 1 : -1
        const isAbout = this.type === 'black' ? y >= 5 : y <= 4
        const arr = [[x, y + forward]]
        if(isAbout){
            arr.push([x+1, y] )
            arr.push([x-1, y])
        }
        this.nextPositions = arr
    }
}

// 车
export class VehicleChessman extends Chessman {
    constructor(type, position) {
        super(type, 'vehicle', position)
    }

    nextLuozi(viewer){
        const [x,y] = this.position
        const arr = []
        const dir = [[0,1], [0,-1], [1,0], [-1,0]]
        for(let [dx, dy] of dir){
            let nx = x + dx
            let ny = y + dy
            while(nx >= 0 && nx < 9 && ny >= 0 && ny < 10){
                const obj = viewer.chessmanLayer.seachByPosition(nx, ny) 
                if(obj && obj.type === this.type){
                    break
                }
                arr.push([nx, ny])
                if(obj){
                    break
                } 
                nx += dx
                ny += dy
            }
        }
        this.nextPositions = arr
    }
}

// 马
export class HorseChessman extends Chessman {
    constructor(type, position) {
        super(type, 'horse', position)
    }
    nextLuozi(viewer){
        const [x,y] = this.position
        const arr = [] 
        const dir = [[0,1], [0,-1], [1,0], [-1,0]]
        for(let [dx, dy] of dir){
            const obj = viewer.chessmanLayer.seachByPosition(dx + x, dy + y) 
            if(obj) continue
            if(dx === 0){
                arr.push([x + 1, y + 2 * dy])
                arr.push([x - 1, y + 2* dy]) 
            } else {
                arr.push([x + 2 * dx, y + 1])
                arr.push([x + 2 * dx, y - 1])
            } 
        }
         this.nextPositions = arr.filter(([x, y]) => {
            if(x < 0 || x > 8 || y < 0 || y > 9) return false
            const obj = viewer.chessmanLayer.seachByPosition(x, y) 
            if(obj && obj.type === this.type) return false
            return true
         })
    }
} 

// 象
export class MutuallyChessman extends Chessman {
    constructor(type, position) {
        super(type, 'mutually', position)
    }
    nextLuozi(viewer){
        const [x,y] = this.position
        const arr = [] 
        const dir = [[1,1], [1,-1], [-1,1], [-1,-1]]
        const miny = this.type === 'red' ? 5 : 0
        const maxy = this.type === 'red' ? 9 : 4
        for(let [dx, dy] of dir){
            const obj = viewer.chessmanLayer.seachByPosition(dx + x, dy + y) 

            if(obj || x + dx < 0 || x + dx > 8 || y + dy < miny || y + dy > maxy) continue 
            const obj2 = viewer.chessmanLayer.seachByPosition(x + dx * 2, y + dy* 2)
            if(obj2  && obj2.type === this.type) continue
            arr.push([x + dx * 2, y + dy* 2]) 
        } 
        this.nextPositions = arr
        
    }
} 

// 士
export class ShiChessman extends Chessman {
    constructor(type, position) {
        super(type, 'shi', position)
    }
    nextLuozi(viewer){
        const [x,y] = this.position
        const arr = [] 
        const dir = [[1,1], [1,-1], [-1,1], [-1,-1]]
        const miny = this.type === 'red' ? 7 : 0
        const maxy = this.type === 'red' ? 9 : 2
        for(let [dx, dy] of dir){
            const obj = viewer.chessmanLayer.seachByPosition(dx + x, dy + y)
            if(obj && obj.type === this.type || x + dx < 3 || x + dx > 5 || y + dy < miny || y + dy > maxy) continue
            arr.push([x + dx, y + dy])
        }
        this.nextPositions = arr
    }
} 

// 将
export class TakeChessman extends Chessman {
    constructor(type, position) {
        super(type, 'take', position)
    }
    nextLuozi(viewer){
        const [x,y] = this.position
        const arr = [] 
        const dir = [[1,0], [-1,0], [0,1], [0,-1]]
        const miny = this.type === 'red' ? 7 : 0
        const maxy = this.type === 'red' ? 9 : 2
        for(let [dx, dy] of dir){
            const obj = viewer.chessmanLayer.seachByPosition(dx + x, dy + y)
            if(obj && obj.type === this.type || x + dx < 3 || x + dx > 5 || y + dy < miny || y + dy > maxy) continue
            arr.push([x + dx, y + dy])
        }
        this.nextPositions = arr
    }
}
 
// 炮
export class CannonChessman extends Chessman {
    constructor(type, position) {
        super(type, 'cannon', position)
    }
    nextLuozi(viewer){
        const [x,y] = this.position
        const arr = [] 
        const dir = [[1,0], [-1,0], [0,1], [0,-1]]
        for(let [dx, dy] of dir){
            let partition = false
            let nx = x + dx
            let ny = y + dy
            while(true){
                if(nx < 0 || nx > 8 || ny < 0 || ny > 9) break
                const obj = viewer.chessmanLayer.seachByPosition(nx, ny)
                if(partition){
                    if(obj && obj.type !== this.type) arr.push([nx, ny])
                    if(obj) break
                } else if(!obj){ 
                    arr.push([nx, ny]) 
                } else {
                    partition = true
                }
                nx += dx
                ny += dy
            }
        }
        this.nextPositions = arr
    }
}


export const chessmanObjClass = {
    soldier: SoldierChessman,
    vehicle: VehicleChessman,
    horse: HorseChessman,
    mutually: MutuallyChessman,
    shi: ShiChessman,
    take: TakeChessman,
    cannon: CannonChessman 
}