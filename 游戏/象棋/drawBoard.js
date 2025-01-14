import { BOARD_MARGIN, CELL_SIZE,LINE, BOARD_WIDTH, BOARD_HEIGHT, AUXILIARY_LABEL, BLACK_CHESSMAN_POSITION, RED_CHESSMAN_POSITION } from './const.js';
import {chessmanObjClass} from './chessman.js'


class Line { 
    constructor(x1, y1, x2, y2) {
        this.x1 = x1;
        this.y1 = y1;
        this.x2 = x2;
        this.y2 = y2;
    }
    draw(ctx) {
        ctx.beginPath();
        ctx.moveTo(this.x1, this.y1);
        ctx.lineTo(this.x2, this.y2);
        ctx.stroke();
    }
}

// 绘制棋盘
export  function  drawBoard(viewer){
    const ctx = viewer.ctx
    ctx.strokeStyle = '#000';
    ctx.lineWidth = 2; 

    // 绘制棋盘线
    LINE.forEach(item => {
        const [x1, y1, x2, y2] = item;
        const line = new Line(BOARD_MARGIN + x1 * CELL_SIZE, BOARD_MARGIN + y1 * CELL_SIZE, BOARD_MARGIN + x2 * CELL_SIZE, BOARD_MARGIN + y2 * CELL_SIZE);
        // line.draw(ctx);
        viewer.boardLayer.add(line);
    }) 

    // 绘制兵炮辅助标 
    AUXILIARY_LABEL.forEach((item) => {  
        const [x, y] = item 
        drawAuxiliary(viewer, x, y) 
    })  
 }


//  绘制辅助标
function drawAuxiliary(viewer, x, y){ 
    const ctx = viewer.ctx

    // 保存当前状态
    ctx.save();
    
    // 计算基准坐标
    const baseX = BOARD_MARGIN + x * CELL_SIZE;
    const baseY = BOARD_MARGIN + y * CELL_SIZE;
    
    // 定义角标记的尺寸
    const size = {
        short: 5,
        long: 15
    };

    // 定义四个角的坐标偏移
    const corners = [
        // [startX, startY, endX, endY] 相对于基准点的偏移
        // 右上角
        [[size.short, -size.long], [size.short, -size.short], [size.long, -size.short]],
        // 右下角
        [[size.short, size.long], [size.short, size.short], [size.long, size.short]],
        // 左上角
        [[-size.short, -size.long], [-size.short, -size.short], [-size.long, -size.short]],
        // 左下角
        [[-size.short, size.long], [-size.short, size.short], [-size.long, size.short]]
    ];

    // 一次性绘制所有角标记
    ctx.beginPath();
    corners.forEach(corner => {
        // 超出棋盘不绘制
        if(baseX + corner[0][0] < BOARD_MARGIN || baseX + corner[1][0] > BOARD_MARGIN + 8 * CELL_SIZE) return

         // 绘制垂直线
        const verticalLine = new Line( baseX + corner[0][0], baseY + corner[0][1], baseX + corner[1][0],  baseY + corner[1][1]);
        // verticalLine.draw(ctx);
        viewer.boardLayer.add(verticalLine);

        // 绘制水平线
        const horizontalLine = new Line(baseX + corner[1][0],  baseY + corner[1][1], baseX + corner[2][0], baseY + corner[2][1]);
        // horizontalLine.draw(ctx); 
        viewer.boardLayer.add(horizontalLine);
    });
    ctx.stroke();

    // 恢复状态
    ctx.restore();

}   

// 初始化棋子
export function initDrawChessman(viewer){
    const ctx = viewer.ctx
    for(const item in BLACK_CHESSMAN_POSITION){ 
        BLACK_CHESSMAN_POSITION[item].forEach(pos => {
            const chessman = new chessmanObjClass[item]('black', pos)
            viewer.chessmanLayer.add(chessman)
        })
    }

    for(const item in RED_CHESSMAN_POSITION){ 
        RED_CHESSMAN_POSITION[item].forEach(pos => {
            const chessman = new chessmanObjClass[item]('red', pos)
            viewer.chessmanLayer.add(chessman)
        })
    }
    
}