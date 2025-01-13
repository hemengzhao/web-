import { BOARD_MARGIN, CELL_SIZE, CHESSMAN_RADIUS, BOARD_HEIGHT, AUXILIARY_LABEL, BLACK_CHESSMAN_POSITION } from './const.js';

const blackChessman = {
    soldier: {
        name: '卒',
        rule: [],
    },
    vehicle: {
        name: '车'
    },
    horse: {
        name: '马'
    },
    mutually: {
        name: '象'
    },
    shi: {
        name: '士'
    },
    take: {
        name: '将'
    },
    cannon: {
        name: '炮'
    },
}
const redChessman = {
    soldier: {
        name: '兵',
    },
    vehicle: {
        name: '车'
    },
    horse: {
        name: '马'
    },
    mutually: {
        name: '相'
    },
    shi: {
        name: '士'
    },
    take: {
        name: '帅'
    },
    cannon: {
        name: '炮'
    },
}


export class Chessman {
    type // black  黑  red 红
    select // 是否选择
    chessman // chessmanEnmu
    rule
    position
    constructor(type, chessman, position) {
        this.type = type
        this.position = position
        this.chessman = type === 'black' ? blackChessman[chessman].name : redChessman[chessman].name
    }
    /**
     * 绘制棋子
     * @param {CanvasRenderingContext2D} ctx - Canvas上下文
     * @param {number} x - 棋子x坐标
     * @param {number} y - 棋子y坐标
     * @param {string} type - 棋子类型（'black' | 'white'）
     * @param {Object} options - 配置选项
     */
    drawChessman(ctx, options = {}) {
        console.log("🚀 ~ Chessman ~ drawChessman ~ ctx:", ctx)
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
    onSelect() {
        this.select = !this.select
    }
}



export class SoldierChessman extends Chessman {
    constructor(type, position) {
        super(type, 'soldier', position)
    }
}

export class VehicleChessman extends Chessman {
    constructor(type, position) {
        super(type, 'vehicle', position)
    }
}


export class HorseChessman extends Chessman {
    constructor(type, position) {
        super(type, 'horse', position)
    }
}



export class MutuallyChessman extends Chessman {
    constructor(type, position) {
        super(type, 'mutually', position)
    }
}



export class ShiChessman extends Chessman {
    constructor(type, position) {
        super(type, 'shi', position)
    }
}



export class TakeChessman extends Chessman {
    constructor(type, position) {
        super(type, 'take', position)
    }
}



export class CannonChessman extends Chessman {
    constructor(type, position) {
        super(type, 'cannon', position)
    }
}



// // 使用示例：
// // 基本使用
// drawChessman(ctx, 3, 3, 'black');

// // 带配置的使用
// drawChessman(ctx, 3, 3, 'white', {
//     radius: 15,
//     shadowBlur: 5,
//     isLastMove: true,
//     isHovered: true
// });

// 动画效果
function animateChessman(x, y, type) {
    let progress = 0;
    const animate = () => {
        if (progress >= 1) return;

        progress += 0.1;
        drawChessman(ctx, x, y, type, {
            radius: 13 * progress,
            shadowBlur: 3 * progress
        });

        requestAnimationFrame(animate);
    };

    animate();
}