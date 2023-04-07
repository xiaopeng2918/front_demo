interface Lengthwise {
  length: number;
}

interface Numeric {
  toFixed(digits?: number): string;
}

function getSize<T extends Lengthwise & Numeric>(arg: T): number {
  return arg.length + Number(arg.toFixed(3));
}

class MyNumber implements Lengthwise, Numeric {
  constructor(public value: number) { }
  length = 10;
  toFixed(digits?: number): string {
    return this.value.toFixed(digits);
  }
}

const num = new MyNumber(123.456);
console.log(getSize(num)); // 输出 133.45999999999998