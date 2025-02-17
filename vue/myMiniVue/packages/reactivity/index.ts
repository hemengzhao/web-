export function isObject(obj: any) {
  return typeof obj === "object" && obj !== null;
}

// 判断两个值是否相等，如果相等返回false，不相等返回true 考虑NAN的情况
export const hasChanged = (value: any, oldValue: any): boolean =>
  value !== oldValue && (value === value || oldValue === oldValue);

export const enum ReactiveFlags {
  SKIP = "__v_skip", // 标记一个对象或属性应该被Vue的响应式系统跳过。
  IS_REACTIVE = "__v_isReactive", // 标记一个对象是否是响应式的。
  IS_READONLY = "__v_isReadonly", // 标记一个对象是否是只读的
  RAW = "__v_raw", // 用于存储响应式对象的原始版本。
}

export interface Target {
  [ReactiveFlags.SKIP]?: boolean;
  [ReactiveFlags.IS_REACTIVE]?: boolean;
  [ReactiveFlags.IS_READONLY]?: boolean;
  [ReactiveFlags.RAW]?: any;
}
