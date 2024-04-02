/**
 * 2649. 嵌套数组生成器
 * @param {Array} arr
 * @return {Generator}
 */
// class FrequencyTracker {
//   map = new Map();
//   freq_cnt = new Map();
//   constructor() {}

//   add(number: number): void {
//     const num = this.map.get(number) ?? 0;
//     this.map.set(number, num + 1);
//   }

//   deleteOne(number: number): void {
//     if (this.map.has(number)) {
//       const num = this.map.get(number) - 1;
//       if (num > 0) {
//         this.map.set(number, num);
//       } else {
//         this.map.delete(number);
//       }
//     }
//   }

//   hasFrequency(frequency: number): boolean {
//     return (this.freq_cnt.get(frequency) || 0) > 0;
//   }
// }

// leetCode 上的解题
class FrequencyTracker {
  map = new Map();
  freq_cnt = new Map();
  constructor() {}

  add(number: number, delta = 1): void {
    let c = this.map.get(number) ?? 0;
    this.freq_cnt.set(c, (this.freq_cnt.get(c) ?? 0) - 1);
    c += delta;
    this.map.set(number, c);
    this.freq_cnt.set(c, (this.freq_cnt.get(c) ?? 0) + 1); // 添加一个新的 cnt[number]
  }

  deleteOne(number: number): void {
    if ((this.map.get(number) ?? 0) > 0) {
      this.add(number, -1);
    }
  }

  hasFrequency(frequency: number): boolean {
    return (this.freq_cnt.get(frequency) || 0) > 0;
  }
}
