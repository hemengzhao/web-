const con = new AbortController();
fetch("http://www.google.com", {
  method: "post",
  signal: con.signal,
});
con.abort();
setTimeout(() => {
  con.abort();
}, 0);
