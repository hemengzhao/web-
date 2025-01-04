document.addEventListener('contextmenu', function(e) {
    e.preventDefault();  // 阻止默认右键菜单
    return false;
});

document.addEventListener('keydown', function(e) {
    if (e.key === 'F12') {
        e.preventDefault();  // 阻止F12键
        return false;
    }
});