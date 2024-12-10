 new Promise((resolve, reject) => {
  resolve(1)
  new Promise((resolve, reject) => {
    resolve(2)
    
   }).then((v) => {
    console.log(v)
   })
 }).then((v) => {
  console.log(v)
 })
// 2
// 1


 new Promise((resolve, reject) => {
 
  setTimeout(() => {
    resolve(1)
    new Promise((resolve, reject) => {
      resolve(2)
      
     }).then((v) => {
      console.log(v)
     })
  }, 0)
  
 }).then((v) => {
  console.log(v)
 })

//  1
//  2



// thenable
// 1. 完成，所有注册的thenable进队列
// 2. 调用then 如果已完成，直接进入队列