import type { ICustomizeContextmenu } from './type'

function contextmenuFn(e: Event) {
  e.preventDefault() // 阻止默认右键菜单
  return false
}
function callonsoleKeydown(e: KeyboardEvent) {
  if (e.key === 'F12') {
    e.preventDefault() // 阻止F12键
    return false
  }
}

// 禁止打开控制台
export function disableConsole() {
  document.addEventListener('contextmenu', contextmenuFn)
  document.addEventListener('keydown', callonsoleKeydown)
}

export function removeDisableConsole() {
  document.removeEventListener('contextmenu', contextmenuFn)
  document.removeEventListener('keydown', callonsoleKeydown)
}

// 自定义右击菜单
function createContextmenu(list: ICustomizeContextmenu[]) {
  const menu = document.createElement('div')
  menu.className = 'custom-menu'
  menu.style.cssText = `
        position: fixed;
        background: white;
        border: 1px solid #ccc;
        padding: 5px 0;
        box-shadow: 2px 2px 5px rgba(0,0,0,0.2);
        display: none;
        z-index: 1000;
    `
  list.forEach((item) => {
    const menuItem = document.createElement('div')
    if (item.type === 'separator') {
      menuItem.className = 'menu-separator'
    } else {
      menuItem.className = 'menu-item'
      menuItem.textContent = item.text
      menuItem.addEventListener('mouseover', () => {
        menuItem.style.backgroundColor = '#f0f0f0'
      })
      menuItem.addEventListener('mouseout', () => {
        menuItem.style.backgroundColor = 'transparent'
      })
    }
    menuItem.style.cssText = item.style || ''
    if (item.onClick) {
      menuItem.addEventListener('click', (e) => {
        e.stopPropagation()
        item.onClick!()
        menu.style.display = 'none'
      })
    }

    menu.appendChild(menuItem)
  })
  return menu
}

export function customizeContextmenu(list: ICustomizeContextmenu[]) {
  const menu = createContextmenu(list)
  document.body.appendChild(menu)
  function contextmenuFn(e: MouseEvent) {
    e.preventDefault() // 阻止默认右键菜单

    // 显示自定义菜单
    menu.style.display = 'block'
    menu.style.left = `${e.clientX}px`
    menu.style.top = `${e.clientY}px`
  }
  function docClick() {
    menu.style.display = 'none'
  }
  // 监听右键点击事件
  document.addEventListener('contextmenu', contextmenuFn)

  // 点击其他地方时隐藏菜单
  document.addEventListener('click', docClick)

  return () => {
    document.removeEventListener('contextmenu', contextmenuFn)
    document.removeEventListener('click', docClick)
    document.body.removeChild(menu)
  }
}

// 禁用控制台更激进的防护措施  适合在已加载就执行
export function disableConsoleTwo() {
  // 禁用所有控制台输出
  const noConsole = () => {
    window.console = {
      log: () => {},
      info: () => {},
      warn: () => {},
      debug: () => {},
      error: () => {},
      dir: () => {},
    }
  }

  // 定时执行debugger
  const antiDebug = () => {
    setInterval(() => {
      debugger
    }, 50)
  }

  // 检测Performance API
  const checkPerformance = () => {
    const start = performance.now()
    debugger
    const end = performance.now()
    if (end - start > 100) {
      // 检测到调试器
      location.href = 'about:blank'
    }
  }

  // 执行所有防护措施
  noConsole()
  antiDebug()
  setInterval(checkPerformance, 1000)
}
