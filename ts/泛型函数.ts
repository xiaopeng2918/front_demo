function printArray<T>(array: T[]): void {
  for (let i = 0; i < array.length; i++) {
    console.log(array[i]);
  }
}

const numbers: number[] = [1, 2, 3, 4, 5];
const strings: string[] = ['hello', 'world'];

printArray<number>(numbers); // 输出 1, 2, 3, 4, 5
printArray<string>(strings); // 输出 hello, world
