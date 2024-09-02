var obj = {m: 20} 
function fn(obj){
    obj = {m: 30} 
    console.log("🚀 ~ fn ~ obj:", obj.m) 
} 
fn(obj)
console.log("🚀 ~ fn ~ obj:", obj.m)



var obj1 = {m: 20} 
function fn1(obj1){
    obj1.m = 30
    console.log("🚀 ~ fn ~ obj1:", obj1.m) 
} 
fn1(obj1)
console.log("🚀 ~ fn ~ obj1:", obj1.m)