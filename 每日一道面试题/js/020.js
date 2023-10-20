/**
 * DOM 和 BOM的区别
 * */

// javascript 有三个部分组成：
// EMCAScript：描述了js语法和基本对象
// BOM（浏览器对对象）： 与浏览器交互的方法和对象
// DOM（文档对象模型）： 处理网页内容的方法

/**
 * DOM（文档对象模型）
 * */
// 定义:
// DOM是表示网页文档结构的模型，提供了对文档内容的结构化表述，使JavaScript可以访问和操作网页中的元素和内容。

// 作用:
// DOM主要用于操作网页文档的结构、样式和内容，包括创建、修改、删除HTML元素、设置和获取元素的属性、样式、内容等。

// 范围:
// DOM包括多个级别，如文档节点、元素节点、属性节点等，以及相关的事件模型。它表示网页的整个文档，可以通过JavaScript进行访问和操作

/**
 * BOM（浏览器对象模型）
 * */

// 定义:
// BOM是表示浏览器窗口和框架的模型，提供了对浏览器窗口和浏览器本身的操作和控制。

// 作用:
// BOM主要用于控制浏览器窗口、导航、弹出对话框、获取浏览器信息、管理浏览历史等。它提供了对浏览器的一些属性和方法的访问，以便于控制浏览器的行为。

// 范围:
// BOM包括window对象，它是所有BOM对象的顶层对象，包括navigator、screen、location、history、document等属性，用于控制浏览器的各个方面。

// 使用标准
// DOM是W3C的标准，所有浏览器公共遵守的标准。
//  BOM是各个浏览器厂商根据DOM在各自浏览器上的实现。
//  window为BOM对象，而非js对象

// DOM 是为了操作文档出现的 API，DOM对象最根本的是document（实际上是window.document）
// BOM 是为了操作浏览器出现的 API，BOM对象最根本的是window。

/**
 * 常见dom操作
 * */
// 1. 查找节点 document.getElementById('id属性值'), document.getElementByClassNames('class属性值')
// 2. 新建节点 document.createElement('元素名')
// 3. 创建新的元素节点 document.createAttribute('属性名')
// 4. 创建新的属性节点 document.createTextNode('文本内容')
// 5. 删除节点 parentNode.removeChild( existingChild )

// DOM事件
// onclick 事件——当用户点击时
// onload 事件——用户进入
// onunload 事件——用户离开
// onmouseover事件——鼠标移入
// onmouseout事件——鼠标移出
// onmousedown事件——鼠标按下
// onmouseup 事件——鼠标抬起

/**
 * 常见BOM对象
 * */
// 1、window对象
// alert(str)：用于向用户展示一些用户不可控的警告信息
// confirm(str)：用于向用户展示一段信息并确认结果
// prompt(str，str): 用于向用户展示一段信息并收集用户输入结果
// print(): 显示打印对话框（等同与点击浏览器菜单栏打印选项）
// find(): 显示查找对话框（等同与点击浏览器菜单栏查找选项）

// 2、location对象，浏览器当前URL信息；
// hash：保存当前url中的哈希值（url中#号后面的任意个字符），url中不包含哈希值 则返回空串
// host：保存当前url中的域名和端口号
// hostName：保存当前url中的域名
// pathName：保存当前url中路径或者文件名
// port：保存当前url中的端口号
// protocol：保存当前url使用的协议
// search：保存url中的查询字符串
// assign(url):导航到参数url位置并生成一条历史记录（等同与 location.href=url， window.localtion=url)
// replace(url):导航到参数rul位置但不生成历史记录
// reload(boolean)：重新加载当前文档，传参true表示强制从服务器加载所有资源

// 3、navigator对象，浏览器本身信息；
// navigator.appCodeName  浏览器代号
// navigator.appName  浏览器名称
// navigator.appVersion  浏览器版本
// navigator.cookieEnabled   启用Cookies
// navigator.platform   硬件平台
// navigator.userAgent   用户代理
// navigator.systemLanguage   用户代理语言

// 4、screen对象，客户端屏幕信息；
// screen.width   总宽度
// screen.height  总高度
// screen.availWidth  可用宽度
// screen.availHeight  可用高度
// screen.colorDepth  色彩深度
// screen.pixelDepth  色彩分辨率

// 5、history对象，浏览器访问历史信息；
//  history.back() - 与在浏览器点击后退按钮相同
//  history.forward() - 与在浏览器中点击向前按钮相同
//  history.go() 这个方法来实现向前，后退的功能
