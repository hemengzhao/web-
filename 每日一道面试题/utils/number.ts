class NumberHandler {
  // 判断提供的值是否是一个非数值
  static isNaN(value: any): boolean {
    return Number.isNaN(value);
  }
  // 判断提供的值是否是一个数值
  static isNumber(value: any): boolean {
    return typeof value === "number";
  }
  // 判断提供的值是否是一个有限数值
  static isInteger(value: any): boolean {
    return Number.isInteger(value);
  }
  // 判断提供的值是否是一个安全整数
  static isSafeInteger(value: any): boolean {
    return Number.isSafeInteger(value);
  }

  // 四舍五入到指定的小数位数
  static round(value: number, decimals: number): number {
    return Number(value.toFixed(decimals));
  }

  // 向上取整到最接近的整数
  static ceil(value: number): number {
    return Math.ceil(value);
  }

  // 向下取整到最接近的整数
  static floor(value: number): number {
    return Math.floor(value);
  }

  // 四舍五入到最接近的整数
  static trunc(value: number): number {
    return Math.trunc(value);
  }

  // 生成随机数 [min, max)
  static random(min: number = 0, max: number = 1, fixed: number = 0): number {
    const num = Math.random() * (max - min) + min;
    if (fixed > 0) {
      return NumberHandler.round(num, fixed);
    }
    return num;
  }

  // 生成随机整数 [min, max)
  static randomInt(min: number = 0, max: number = 1): number {
    return Math.floor(Math.random() * (max - min)) + min;
  }
}
