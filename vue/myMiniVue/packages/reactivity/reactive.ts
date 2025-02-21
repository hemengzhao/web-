import { isObject, ReactiveFlags, Target } from "./index";
import { baseHandlers } from "./baseHandlers";
import { collectionHandlers } from "./collectionHandlers";
const readonlyMap = new WeakMap<Target, any>();
const reactiveMap = new WeakMap<Target, any>();
export function reactive(target: unknown) {
  if (!isObject(target)) {
    return target;
  }
  if (target[ReactiveFlags.IS_REACTIVE]) {
    return target;
  }
  return createReactiveObject(
    target as Target,
    false,
    baseHandlers,
    collectionHandlers
  );
}

export function createReactiveObject(
  target: Target,
  isReadonly: boolean,
  baseHandlers: ProxyHandler<any>,
  collectionHandlers: ProxyHandler<any>
) {
  // target不是对象类型， 直接return出去
  if (!isObject(target)) {
    return target;
  }
  if (
    target[ReactiveFlags.RAW] &&
    !(isReadonly && target[ReactiveFlags.IS_REACTIVE])
  ) {
    return target;
  }

  const proxyMap = isReadonly ? readonlyMap : reactiveMap;
  const existingProxy = proxyMap.get(target);
  if (existingProxy) {
    return existingProxy;
  }

  const proxy = new Proxy(target, baseHandlers);
  proxyMap.set(target, proxy);
  return proxy;
}
