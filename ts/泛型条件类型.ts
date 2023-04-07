type NonNullable1<T> = T extends null | undefined ? never : T;

const str: string | null | undefined = 'hello';

// 使用 NonNullable 泛型类型，返回值为 string 类型
const result: NonNullable1<typeof str> = str!;
console.log(result); // 输出 hello