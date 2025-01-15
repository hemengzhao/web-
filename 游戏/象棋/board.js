
// 线段
export class Line { 
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


// 可以落子标识
export class FallingChessman  {
    coordinate
    position 
    constructor(position) { 
        this.coordinate = [BOARD_MARGIN + position[0] * CELL_SIZE, BOARD_MARGIN + position[1] * CELL_SIZE]
        this.position = position;
    }
    draw(ctx) { 
        const [x, y] = this.position 
        // 计算中心点坐标
        const centerX = BOARD_MARGIN + x * CELL_SIZE;
        const centerY = BOARD_MARGIN + y * CELL_SIZE;
        ctx.save(); 
        ctx.fillStyle = 'green';
        ctx.beginPath();
        ctx.arc(centerX, centerY, 13, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
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
