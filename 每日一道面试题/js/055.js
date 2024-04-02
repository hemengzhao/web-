const r = console.log.call.call.call.call.apply((a) => a, [1, 2]);

// fn.call(Object, param1, param2, ....., paramN)
// fn.apply(Object, [param1, param2, ....., paramN])

// Function.call.apply((a) => a, [1, 2])
// ((a) => a).call(1, 2)
// ((a) => a)(2)
// 2
console.log("🚀 ~ r:", r);
