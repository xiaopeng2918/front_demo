interface NumberArray {
  [index: number]: number;
  length: number;
}

const arr: NumberArray = [1, 2, 3];
//虽然[1, 2, 3]是一个数组而不是对象，但是在 JavaScript 中，数组本质上也是一种特殊的对象，
//它包含了数值型的索引和一些数组方法，因此也可以被视为一种类数组对象。
//在 TypeScript 中，类型检查器会根据接口定义的规范来检查数组的类型，如果数组符合接口的规范，
//则会被认为是该接口的实现。因此，对于 NumberArray 接口来说，只要一个数组包含了数值型的索引和 length 属性，
//并且索引值类型为数字类型，就可以被认为是 NumberArray 类型的实现。
// arr.push(4); // 类型“NumberArray”上不存在属性“push”
(arr as Array<number>).push(5);
console.log(arr); // [ 1, 2, 3, 5 ]
console.log(arr.length); // 输出 3
console.log(arr[0]); // 输出 1