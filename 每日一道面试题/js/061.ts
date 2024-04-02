type JsTypeMap = {
  string: String;
  number: Number;
  boolean: Boolean;
  object: Object;
  array: Array<any>;
  symbol: Symbol;
  undefined: undefined;
  null: null;
  bigint: BigInt;
};
type TJsTypeParams =
  | "string"
  | "number"
  | "boolean"
  | "object"
  | "array"
  | "symbol"
  | "undefined"
  | "null"
  | "bigint";

type ArgsType<T extends TJsTypeParams[]> = {
  [I in keyof T]: JsTypeMap[T[I]];
};

function addImpl<T extends TJsTypeParams[]>(
  ...args: [...T, (...args: ArgsType<T>) => any]
) {}
addImpl("number", "string", "boolean", (a, b, c) => {});
addImpl("number", "string", "boolean", (a, b, c) => {});
addImpl("number", "undefined", "array", "symbol", (a, b, c, d) => {});
