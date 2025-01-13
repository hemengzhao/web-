import { BOARD_MARGIN, CELL_SIZE, BOARD_WIDTH, BOARD_HEIGHT, AUXILIARY_LABEL, BLACK_CHESSMAN_POSITION, RED_CHESSMAN_POSITION } from './const.js';
import {SoldierChessman} from './chessman.js'
export  function  drawBoard(ctx){
    ctx.strokeStyle = '#000';
    ctx.lineWidth = 2;
 
    // 绘制外框
    ctx.beginPath();
    ctx.rect(
        BOARD_MARGIN, 
        BOARD_MARGIN, 
        CELL_SIZE * BOARD_WIDTH, 
        CELL_SIZE * BOARD_HEIGHT
    );
    ctx.stroke();
    
    // 绘制横线
    for (let i = 1; i < BOARD_HEIGHT; i++) {
        ctx.beginPath();
        ctx.moveTo(BOARD_MARGIN, BOARD_MARGIN + i * CELL_SIZE);
        ctx.lineTo(BOARD_MARGIN + BOARD_WIDTH * CELL_SIZE, BOARD_MARGIN + i * CELL_SIZE);
        ctx.stroke();
    }
     
    // 绘制竖线
    for (let i = 1; i < BOARD_WIDTH; i++) {
        ctx.beginPath();
        ctx.moveTo(BOARD_MARGIN + i * CELL_SIZE, BOARD_MARGIN);
        ctx.lineTo(BOARD_MARGIN + i * CELL_SIZE, BOARD_MARGIN + BOARD_HEIGHT * CELL_SIZE);
        ctx.stroke();
    }

    ctx.clearRect(
        BOARD_MARGIN + 1,
         4 * CELL_SIZE +  BOARD_MARGIN + 1, 
         CELL_SIZE * BOARD_WIDTH - 2, 
         CELL_SIZE -2,
    );
   
    // 绘制楚河汉界
    ctx.font = '30px Arial';
    ctx.fillStyle = '#000';
    ctx.fillText('楚 河', BOARD_MARGIN + CELL_SIZE * 1.5, BOARD_MARGIN + CELL_SIZE * 4.7);
    ctx.fillText('汉 界', BOARD_MARGIN + CELL_SIZE * 4.5, BOARD_MARGIN + CELL_SIZE * 4.7);
    
    // 绘制斜线（九宫格）
    // 上方九宫格
    ctx.beginPath();
    ctx.moveTo(BOARD_MARGIN + 3 * CELL_SIZE, BOARD_MARGIN);
    ctx.lineTo(BOARD_MARGIN + 5 * CELL_SIZE, BOARD_MARGIN + 2 * CELL_SIZE);
    ctx.stroke();
    
    ctx.beginPath();
    ctx.moveTo(BOARD_MARGIN + 5 * CELL_SIZE, BOARD_MARGIN);
    ctx.lineTo(BOARD_MARGIN + 3 * CELL_SIZE, BOARD_MARGIN + 2 * CELL_SIZE);
    ctx.stroke();
    
    // 下方九宫格
    ctx.beginPath();
    ctx.moveTo(BOARD_MARGIN + 3 * CELL_SIZE, BOARD_MARGIN + 7 * CELL_SIZE);
    ctx.lineTo(BOARD_MARGIN + 5 * CELL_SIZE, BOARD_MARGIN + 9 * CELL_SIZE);
    ctx.stroke();
    
    ctx.beginPath();
    ctx.moveTo(BOARD_MARGIN + 5 * CELL_SIZE, BOARD_MARGIN + 7 * CELL_SIZE);
    ctx.lineTo(BOARD_MARGIN + 3 * CELL_SIZE, BOARD_MARGIN + 9 * CELL_SIZE);
    ctx.stroke();


    // 绘制兵炮辅助标

    AUXILIARY_LABEL.forEach((item) => {  
        const [x, y] = item 
        drawAuxiliary(ctx, x, y)
 
    })

    initDrawChessman(ctx)

 }


 
function drawAuxiliary(ctx, x, y){
    // // 右上
    // ctx.beginPath();
    // ctx.moveTo(BOARD_MARGIN + x * CELL_SIZE + 5, BOARD_MARGIN + y * CELL_SIZE - 15);
    // ctx.lineTo(BOARD_MARGIN + x * CELL_SIZE + 5 , BOARD_MARGIN + y * CELL_SIZE - 5);
    // ctx.stroke();  

    // ctx.beginPath();
    // ctx.moveTo(BOARD_MARGIN + x * CELL_SIZE + 5 , BOARD_MARGIN + y * CELL_SIZE - 5);
    // ctx.lineTo(BOARD_MARGIN + x * CELL_SIZE + 15 , BOARD_MARGIN + y * CELL_SIZE - 5);
    // ctx.stroke();


    // // 右下
    // ctx.beginPath();
    // ctx.moveTo(BOARD_MARGIN + x * CELL_SIZE + 5, BOARD_MARGIN + y * CELL_SIZE + 15);
    // ctx.lineTo(BOARD_MARGIN + x * CELL_SIZE + 5 , BOARD_MARGIN + y * CELL_SIZE + 5);
    // ctx.stroke(); 

    // ctx.beginPath();
    // ctx.moveTo(BOARD_MARGIN + x * CELL_SIZE + 5 , BOARD_MARGIN + y * CELL_SIZE + 5);
    // ctx.lineTo(BOARD_MARGIN + x * CELL_SIZE + 15 , BOARD_MARGIN + y * CELL_SIZE + 5);
    // ctx.stroke();

    // // 左上
    // ctx.beginPath();
    // ctx.moveTo(BOARD_MARGIN + x * CELL_SIZE - 5, BOARD_MARGIN + y * CELL_SIZE - 15);
    // ctx.lineTo(BOARD_MARGIN + x * CELL_SIZE - 5 , BOARD_MARGIN + y * CELL_SIZE - 5);
    // ctx.stroke(); 

    // ctx.beginPath();
    // ctx.moveTo(BOARD_MARGIN + x * CELL_SIZE - 5 , BOARD_MARGIN + y * CELL_SIZE - 5);
    // ctx.lineTo(BOARD_MARGIN + x * CELL_SIZE - 15 , BOARD_MARGIN + y * CELL_SIZE - 5);
    // ctx.stroke();


    // // 左下
    // ctx.beginPath();
    // ctx.moveTo(BOARD_MARGIN + x * CELL_SIZE - 5, BOARD_MARGIN + y * CELL_SIZE + 15);
    // ctx.lineTo(BOARD_MARGIN + x * CELL_SIZE - 5 , BOARD_MARGIN + y * CELL_SIZE + 5);
    // ctx.stroke(); 

    // ctx.beginPath();
    // ctx.moveTo(BOARD_MARGIN + x * CELL_SIZE - 5 , BOARD_MARGIN + y * CELL_SIZE + 5);
    // ctx.lineTo(BOARD_MARGIN + x * CELL_SIZE - 15 , BOARD_MARGIN + y * CELL_SIZE + 5);
    // ctx.stroke();


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
        ctx.moveTo(
            baseX + corner[0][0],
            baseY + corner[0][1]
        );
        ctx.lineTo(
            baseX + corner[1][0],
            baseY + corner[1][1]
        );
        
        // 绘制水平线
        ctx.moveTo(
            baseX + corner[1][0],
            baseY + corner[1][1]
        );
        ctx.lineTo(
            baseX + corner[2][0],
            baseY + corner[2][1]
        );
    });
    ctx.stroke();

    // 恢复状态
    ctx.restore();

}   

function initDrawChessman(ctx){
    
    BLACK_CHESSMAN_POSITION.soldier.forEach(item => {
        const chessman = new SoldierChessman('black', item)
        chessman.drawChessman(ctx)
    })

    RED_CHESSMAN_POSITION.soldier.forEach(item => {
        const chessman = new SoldierChessman('red', item)
        chessman.drawChessman(ctx)
    })
}