// 方案一：监听窗口大小变化
function checkDevTools() {
    // 获取窗口外部高度
    const window_height = window.outerHeight;
    // 获取窗口内部高度
    const client_height = window.innerHeight;
    
    // 如果两者差值大于一定值，说明开发者工具可能被打开
    if (window_height - client_height > 200) {
        // 检测到开发者工具
        console.clear(); // 清空控制台
        debugger;  // 触发debugger
        location.href = "about:blank"; // 或重定向到空白页
    }
}

// 监听窗口大小变化
window.addEventListener('resize', checkDevTools);

// 定时检查
setInterval(checkDevTools, 1000);


// 方案二：更复杂的检测方案
(function () {
    function detectDevTools() {
        const threshold = 160; // 阈值
        const checkDevTools = {
            isOpen: false,
            orientation: null
        };

        // 检测方法一：窗口尺寸
        const emitCheck = () => {
            const widthThreshold = window.outerWidth - window.innerWidth > threshold;
            const heightThreshold = window.outerHeight - window.innerHeight > threshold;
            
            if (widthThreshold || heightThreshold) {
                checkDevTools.isOpen = true;
                checkDevTools.orientation = widthThreshold ? 'vertical' : 'horizontal';
            } else {
                checkDevTools.isOpen = false;
                checkDevTools.orientation = null;
            }
        };

        // 检测方法二：console.log 性能
        const checkConsole = () => {
            const startTime = performance.now();
            for (let i = 0; i < 1000; i++) {
                console.log(i);
                console.clear();
            }
            const endTime = performance.now();
            if (endTime - startTime > 100) {
                checkDevTools.isOpen = true;
            }
        };

        // 检测方法三：debugger 关键字
        const checkDebugger = () => {
            let count = 0;
            const start = new Date();
            debugger;
            const end = new Date();
            if (end - start > 100) {
                checkDevTools.isOpen = true;
            }
        };

        // 执行检测
        window.addEventListener('resize', emitCheck);
        setInterval(() => {
            emitCheck();
            // checkConsole(); // 注意：这个方法会产生大量日志
            checkDebugger();

            // 如果检测到开发者工具
            if (checkDevTools.isOpen) {
                // 执行相应操作
                console.clear();
                debugger;
                // 可以选择重定向
                // location.href = "about:blank";
                
                // 或者显示警告
                alert("请不要打开开发者工具！");
                
                // 或者禁用右键和F12
                document.oncontextmenu = () => false;
                document.onkeydown = (e) => {
                    if (e.key === 'F12') {
                        e.preventDefault();
                        return false;
                    }
                };
            }
        }, 1000);
    }

    // 启动检测
    detectDevTools();
})();



// 方案三：更激进的防护措施
(function () {
    // 禁用所有控制台输出
    const noConsole = () => {
        window.console = {
            log: () => {},
            info: () => {},
            warn: () => {},
            debug: () => {},
            error: () => {},
            dir: () => {}
        };
    };

    // 定时执行debugger
    const antiDebug = () => {
        setInterval(() => {
            debugger;
        }, 50);
    };

    // 检测Performance API
    const checkPerformance = () => {
        const start = performance.now();
        debugger;
        const end = performance.now();
        if (end - start > 100) {
            // 检测到调试器
            location.href = "about:blank";
        }
    };

    // 执行所有防护措施
    noConsole();
    antiDebug();
    setInterval(checkPerformance, 1000);
})();