export class ColorHandle {
  private r: number;
  private g: number;
  private b: number;
  private a: number;

  constructor(color: string) {
    this.r = 0;
    this.g = 0;
    this.b = 0;
    this.a = 1;
    this.parse(color);
  }

  private parse(color: string): void {
    // 处理16进制格式
    if (/^#/.test(color)) {
      const hex = color.replace("#", "");
      if ([3, 4, 6, 8].includes(hex.length)) {
        let hexParts: string[] = [];

        if (hex.length <= 4) {
          hexParts = hex.split("").map((c) => c + c);
        } else {
          hexParts = hex.match(/.{2}/g) || [];
        }

        // 添加透明度通道处理
        [this.r, this.g, this.b] = hexParts
          .slice(0, 3)
          .map((v) => parseInt(v, 16));
        this.a = hexParts[3]
          ? Math.round(
              (parseInt(hexParts[3], 16) / 255 + Number.EPSILON) * 100
            ) / 100
          : 1;
      }
      return;
    }

    // 处理rgb/rgba格式
    const rgbaMatch = color.match(/rgba?\(([^)]+)\)/i);
    if (rgbaMatch) {
      const parts = rgbaMatch[1].split(/,\s*/).map((part) => {
        if (/%$/.test(part)) {
          return Math.round(parseFloat(part) * 2.55);
        }
        return parseFloat(part);
      });

      [this.r, this.g, this.b] = parts.slice(0, 3);
      this.a = parts[3] ?? 1;
    }
  }

  public toHex(): string {
    const componentToHex = (c: number): string => {
      const hex = Math.round(c).toString(16).padStart(2, "0");
      return hex;
    };

    // 添加透明度转换逻辑
    const alphaHex =
      this.a !== 1 ? componentToHex(Math.round(this.a * 255)) : "";

    return `#${[this.r, this.g, this.b]
      .map(componentToHex)
      .join("")}${alphaHex}`;
  }

  public toRgb(): string {
    return this.a === 1
      ? `rgb(${Math.round(this.r)},${Math.round(this.g)},${Math.round(this.b)})`
      : `rgb(${Math.round(this.r)} ${Math.round(this.g)} ${Math.round(
          this.b
        )} / ${this.a})`;
  }

  public toRgba(): string {
    return `rgba(${Math.round(this.r)},${Math.round(this.g)},${Math.round(
      this.b
    )},${this.a})`;
  }
}
