/**
 * 获取 url 中指定参数
 * URLSearchParams 接口定义了一些实用的方法来处理 URL 的查询字符串。
 * decodeURIComponent() 方法用于解码由 encodeURIComponent 方法或者其他类似方法编码的部分统一资源标识符（URI）。
 * */
function getUrlParams(key) {
  // history 参数获取
  let queryString = window.location.search;

  // hash 路由参数在hash里面
  if (window.location.hash) {
    queryString = window.location.hash.split("?")[1];
  }

  if (typeof URLSearchParams === "function") {
    const urlParams = new URLSearchParams(queryString);
    if (urlParams.has(key)) {
      return urlParams.get(key);
    }
  } else if (queryString.includes(key + "=")) {
    const queryParams = queryString.slice(1).split("&");
    for (const param of queryParams) {
      const [paramKey, paramValue] = param.split("=");
      if (paramKey === key) {
        return decodeURIComponent(paramValue || "");
      }
    }
  }
  return null;
}
