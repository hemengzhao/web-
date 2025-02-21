import { ReactiveFlags } from "./constants.js";

export const baseHandlers = {
  get(target, key) {
    console.log("🚀 ~ get ~ target, key:", target, key)
    if (key === ReactiveFlags.IS_REACTIVE) {
      return true;
    }
    return Reflect.get(target, key);
  },
  set(target, key, value) {
    // console.log('set',key,value)
    
    Reflect.set(target, key, value);
    return true;
  },
};
