function myAjax(mode, url, data, callback) {
  // 创建一个XMLHttpRequest对象的实例，即创建一个异步调用对象
  const xhr = new XMLHttpRequest();
  // 对请求参数处理
  let str = "";
  if (data) {
    for (key in data) {
      str += key + "=" + data[key] + "&";
    }
  }

  if (mode === "get") {
    url = str ? url + "?" + str : url;
  }

  // 创建HTTP请求，可以使用XMLHttpRequest的open方法
  xhr.open(mode, url, true);

  if (mode === "post") {
    // 设置请求头
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
  }

  // 设置响应HTTP请求状态变化事件的回调函数
  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4) {
      if (xhr.status === 2000) {
        callback(xhr.responseText);
      }
    }
  };
  // 发送HTTP请求到web服务器上
  xhr.send(str);
}

myAjax("get", "http://localhost:8080/myname/get");

myAjax("get", "http://localhost:8080/myname", { name: "myname", age: 23 });

myAjax("post", "http://localhost:8080/myname", { name: "myname", age: 23 });

myAjax("post", "http://localhost:8080/myname");
