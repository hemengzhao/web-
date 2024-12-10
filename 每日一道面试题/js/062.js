 
// 本地存储cookie、localStorage和sessionStorage

// 存储大小
//  cookie 一般是 4 KB 左右  数量有限制，一般是 50 条左右
//  localStorage 一般是5M左右
//  sessionStorage 一般是5M左右

//  存储时间
//  cookie 可以设置具体的过期时间   没有设置浏览器关闭时失效
//  localStorage  永久存储
//  sessionStorage 数据只在浏览器会话期间有效，关闭标签页或窗口后数据被清除。

// 作用域
// 都受同源策略的限制
// cookie  不用端口下可以共享   
// localStorage 属于浏览器的原点（协议+域名+端口），可以在同一个原点的不同页面和标签之间共享。
// sessionStorage 仅仅在单个浏览器标签页或窗口中有效，不同标签页或窗口是隔离的

// 与服务器的交互
// Cookie: 每次HTTP请求都会自动携带同源Cookie，可能增加请求大小。
// localStorage 和 SessionStorage: 存储在客户端，不参与HTTP请求和响应。

// 安全性

// Cookie: 可以设置为HttpOnly，限制通过客户端脚本访问，增加安全性。
// localStorage 和 SessionStorage: 存储在客户端，容易受到跨站脚本攻击（XSS）的影响。

// 使用场景
// Cookie: 常用于身份验证、会话管理等。
// localStorage: 适用于存储大量数据，如用户偏好设置、缓存等。
// SessionStorage: 适用于需要在单个会话中存储临时数据的场景。

// 访问方式
// Cookie: 可以通过JavaScript的document.cookie属性访问和修改。
// localStorage 和 SessionStorage: 可以通过JavaScript的localStorage和sessionStorage对象访问和修改。