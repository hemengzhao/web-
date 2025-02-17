import { hasChanged, isObject, ReactiveFlags, Target } from "./index";
import { reactive } from "./reactive";

class RefImpl<T> {
  private _value: T;
  constructor(private _rewValue: T, private readonly _shallow = false) {
    this._value = _shallow ? _rewValue : convert(_rewValue);
  }
  get value() {
    return this._value;
  }
  set value(newVal) {
    if (hasChanged(toRaw(newVal), this._rewValue)) {
      this._rewValue = newVal;
      this._value = this._shallow ? newVal : convert(newVal);
    }
  }
}

export function ref(value?: unknown) {
  return createRef(value);
}

function createRef(value?: unknown, shallow = false) {
  return new RefImpl(value);
}

export function convert<T extends unknown>(value: T): T {
  return isObject(value) ? reactive(value) : value;
}

export function toRaw<T>(observed: T): T {
  return (
    (observed && toRaw((observed as Target)[ReactiveFlags.RAW])) || observed
  );
}
