export const isObject = (val) => {
  return val !== null && typeof val === 'object'
}

export const objectToString  =  Object.prototype.toString
export const toTypeString = (value  ) =>
  objectToString.call(value)

export const toRawType = (value) => {
  // extract "RawType" from strings like "[object RawType]"
  return toTypeString(value).slice(8, -1)
}
