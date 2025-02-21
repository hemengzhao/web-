import { ReactiveFlags } from "./index";

export const baseHandlers = {
  get(target, key) {
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
