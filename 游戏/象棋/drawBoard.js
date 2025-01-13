import { BOARD_MARGIN, CELL_SIZE, BOARD_WIDTH, BOARD_HEIGHT } from './const.js';

export  function  drawBoard(  ctx){
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

 }
