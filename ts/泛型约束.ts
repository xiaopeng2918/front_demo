// 函数类型
function logger<T extends { toString(): string }>(value: T) {
  console.log(value.toString());
}

logger('hello');
logger(123);
logger({ name: 'john', age: 30 });

// 类类型
class Box<T extends { toString(): string }> {
  value: T;
  constructor(value: T) {
    this.value = value;
  }
  getValue(): T {
    return this.value;
  }
}

let box1 = new Box<string>('hello');
let box2 = new Box<number>(123);

// 接口类型
interface MyObject<T extends { toString(): string }> {
  value: T;
  getValue(): T;
}

let obj1: MyObject<string> = { value: 'hello', getValue() { return this.value; } };
let obj2: MyObject<number> = { value: 123, getValue() { return this.value; } };