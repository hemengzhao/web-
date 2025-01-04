// 创建自定义菜单
const menu = document.createElement('div');
menu.className = 'custom-menu';
menu.style.cssText = `
    position: fixed;
    background: white;
    border: 1px solid #ccc;
    padding: 5px 0;
    box-shadow: 2px 2px 5px rgba(0,0,0,0.2);
    display: none;
    z-index: 1000;
`;

// 添加菜单项
const menuItems = [
    { text: '刷新', onClick: () => location.reload() },
    { type: 'separator' },  // 分隔线
    { text: '复制', onClick: () => document.execCommand('copy') },
    { text: '粘贴', onClick: () => document.execCommand('paste') },
];

menuItems.forEach(item => {

    if (item.type === 'separator') {
        const separator = document.createElement('div');
        separator.style.cssText = `
            height: 1px;
            background: #ccc;
            margin: 5px 0;
        `;
        menu.appendChild(separator);
    } else {

        const menuItem = document.createElement('div');
        menuItem.className = 'menu-item';
        menuItem.textContent = item.text;
        menuItem.style.cssText = `
            padding: 8px 20px;
            cursor: pointer;
        `;
        menuItem.addEventListener('click', (e) => {
            e.stopPropagation();
            item.onClick();
            menu.style.display = 'none';
        });
        menuItem.addEventListener('mouseover', () => {
            menuItem.style.backgroundColor = '#f0f0f0';
        });
        menuItem.addEventListener('mouseout', () => {
            menuItem.style.backgroundColor = 'transparent';
        });
        menu.appendChild(menuItem);
    }
});

document.body.appendChild(menu);

// 监听右键点击事件
document.addEventListener('contextmenu', (e) => {
    e.preventDefault();  // 阻止默认右键菜单
    
    // 显示自定义菜单
    menu.style.display = 'block';
    menu.style.left = `${e.clientX}px`;
    menu.style.top = `${e.clientY}px`;
});

// 点击其他地方时隐藏菜单
document.addEventListener('click', () => {
    menu.style.display = 'none';
});