import {baseHandlers} from './baseHandlers.js'
import {collectionHandlers} from './collectionHandlers.js'
import {toRawType, isObject} from '../shared/general.js'
import { ReactiveFlags } from "./constants.js";

const reactiveMap = new WeakMap();

const TargetType = {
    INVALID: 0,
    COMMON: 1,
    COLLECTION: 2, 
}

function targetTypeMap(rawType) {
    switch (rawType) {
      case 'Object':
      case 'Array':
        return TargetType.COMMON
      case 'Map':
      case 'Set':
      case 'WeakMap':
      case 'WeakSet':
        return TargetType.COLLECTION
      default:
        return TargetType.INVALID
    }
  }
 
function getTargetType(value) {
    return value[ReactiveFlags.SKIP] || !Object.isExtensible(value)
      ? TargetType.INVALID
      : targetTypeMap(toRawType(value))
  }

  export function isReadonly(value )  {
    return !!(value && value[ReactiveFlags.IS_READONLY])
  }
export function reactive(target){
    if( !isObject(target)){
      return target
    } 
    if (isReadonly(target)) {
        return target;
    }
   return createReactiveObject(
      target ,
      false,
      baseHandlers,
      collectionHandlers,
      reactiveMap
    );
}

export function createReactiveObject(target, isReadonly, baseHandlers, collectionHandlers, proxyMap){
  // TODO
      const existingProxy = proxyMap.get(target); 
    if(existingProxy){
        return existingProxy
    }
    const targetType = getTargetType(target);
    if (targetType === TargetType.INVALID) {
        return target
    }

    const proxy = new Proxy(target, targetType === TargetType.COLLECTION  ? collectionHandlers : baseHandlers);
    proxyMap.set(target, proxy);
    return proxy;
}