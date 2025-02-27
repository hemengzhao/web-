import { ReactiveFlags } from "./constants.js";
import {activeEffect, track, trigger} from './effect.js'
export const baseHandlers = {
  get(target, key, recevier) { 
    if (key === ReactiveFlags.IS_REACTIVE) {
      return true;
    }

    track(target, key);
    return Reflect.get(target, key, recevier);
  },
  set(target, key, value, recevier) {
    // console.log('set',key,value)
    let obdValue = target[key];
    let result = Reflect.set(target, key, value, recevier);

    if( obdValue !== value) {
      trigger(target, key, value, obdValue);
    }
  
    return result;
  },
};
