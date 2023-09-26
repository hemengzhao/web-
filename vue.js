let data = {};
let a = 1;
Object.defineProperty(data, "a", {
  get: function () {
    console.log("defineProperty", this);
    return a;
  },
  set: function (value) {
    console.log("defineProperty", value);
    a = value;
  },
  enumerable: false,
  //   writable: true,
  configurable: true,
  //   value: 11,
});
console.log("defineProperty", data.a, data);
data.a = 21;
console.log("defineProperty", data.a);

let _data = new Proxy(
  {},
  {
    get(target, key, receiver) {
      console.log("Proxy get", target, key, receiver);
      return Reflect.get(target, key, receiver);
    },
    set(target, key, value, receiver) {
      console.log("Proxy set", target, key, value, receiver);
      return Reflect.set(target, key, value, receiver);
    },
  }
);

_data.a = 21;
console.log(_data.a);
