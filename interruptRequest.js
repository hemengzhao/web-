
// fetch  中断请求
const con = new AbortController();
fetch("http://www.google.com", {
  method: "post",
  signal: con.signal,
});
con.abort();
setTimeout(() => {
  con.abort();
}, 0);


// 中断axios请求
import axios from 'axios'
const CancelToken = axios.CancelToken
let cancel

axios.get('/your-endpoint', {
  cancelToken: new CancelToken((c) => {
    // 保存取消函数
    cancel = c
  }),
}).then((response) => {
  // 处理响应
})

// 当你需要取消请求时
cancel()
