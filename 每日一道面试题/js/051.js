function controllerFetch(url, headers = {}) {
  const controller = new AbortController();
  header.signal = controller.signal;
  return (time) => {
    setTimeout(() => {
      controller.abort();
    }, time);
    return fetch(url, header);
  };
}

// controllerFetch("http://localhost/api/v1/2")(100);

// 提供取消请求
function controllerFetch2(url, headers = {}) {
  const controller = new AbortController();
  header.signal = controller.signal;
  const fetchFunction = (time) => {
    setTimeout(() => {
      controller.abort();
    }, time);

    return fetch(url, headers);
  };

  fetchFunction.cancel = () => controller.abort();

  return fetchFunction;
}
