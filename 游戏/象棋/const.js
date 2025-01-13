// 棋盘参数
export const BOARD_MARGIN = 40; // 边距
export const CELL_SIZE = 60;    // 格子大小
export const BOARD_WIDTH = 8;   // 横向格子数
export const BOARD_HEIGHT = 9;  // 纵向格子数 position
export const CHESSMAN_RADIUS = 26 // 棋子半径
export const BLACK_CHESSMAN_POSITION = {
    soldier: [[0, 3], [2, 3], [4, 3],[6, 3], [8, 3]],
    vehicle: [[0,0], [8, 0]],
    horse: [[1,0], [7, 0]],
    mutually: [[2,0], [6, 0]],
    shi: [[3,0], [5, 0]],
    take: [[4,0] ],
    cannon: [[1,2], [7, 2]]
}
export const RED_CHESSMAN_POSITION = {
    soldier: [[0, 6], [2, 6], [4, 6],[6, 6], [8, 6]],
    vehicle: [[0,9], [8, 9]],
    horse: [[1,9], [7, 9]],
    mutually: [[2,9], [6, 9]],
    shi: [[3,9], [5, 9]],
    take: [[4,9] ],
    cannon: [[1,7], [7, 7]]
}
export const AUXILIARY_LABEL = [...BLACK_CHESSMAN_POSITION.soldier, ...BLACK_CHESSMAN_POSITION.cannon, ...RED_CHESSMAN_POSITION.soldier, ...RED_CHESSMAN_POSITION.cannon]
