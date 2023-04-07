type func = (...args: any[]) => any;
type FunctionReturnIsString<T extends func> = T extends (...args: any[]) => string ? 'A function return string' : 'A function return is not string';

type stringFun = FunctionReturnIsString<(...args: any[]) => 'hahha'>;
type stringFun2 = FunctionReturnIsString<(...args: any[]) => 55555>;

// infer
type FunctionReturnType<T extends func> = T extends (...args: any[]) => infer R ? R : never;

type typeFun1 = FunctionReturnType<(...args: any[]) => 'hahha'>;
type typeFun2 = FunctionReturnType<(...args: any[]) => 55555>;

type Swap<T extends any[]> = T extends [infer A, infer B] ? [B, A] : T;

type SwapResult1 = Swap<[1, 2]>; // 符合元组结构，首尾元素替换[2, 1]
type SwapResult2 = Swap<[1, 2, 3]>; // 不符合结构，没有发生替换，仍是 [1, 2, 3]

type ArrayItemType<T> = T extends Array<infer ElementType> ? ElementType : never;
// T extends Array<infer ElementType> ? 首先 T要是数组

type arrayType1 = ArrayItemType<string[]>; // string
type arrayType2 = ArrayItemType<['哈哈哈', '嘿嘿和']>; //"哈哈哈" | "嘿嘿和"
type arrayType3 = ArrayItemType<(string | number)[]>; // string | number
// 这里的 [string, number] 实际上等价于 (string | number)[]

//提取对象的属性类型
type PropType<T, K extends keyof T> = T extends { [Key in K]: infer R } ? R : never;
// K 表示一个联合类型
// Key in K 表示一个 TypeScript 中的映射类型，用于遍历一个类型 K 中的所有属性名称，并将其赋值给类型变量 Key
/*
  type Stringify<T> = {
  [K in keyof T]: string;
};
interface Foo {
  prop1: string;
  prop2: number;
  prop3: boolean;
  prop4: () => void;
}

type StringifiedFoo = Stringify<Foo>;

// 等价于
interface StringifiedFoo {
  prop1: string;
  prop2: string;
  prop3: string;
  prop4: string;
}

*/
type PropTypeResult1 = PropType<{ name: string }, 'name'>; // string
type PropTypeResult2 = PropType<{ name: string, age: number }, 'name' | 'age'>; // string | number 

// 反转键名与键值
type reverseKeyAndValue<T extends Record<string, string>> = T extends Record<infer K, infer V> ? Record<V&string, K> : never;

type reverseResult = reverseKeyAndValue<{"name": "yxp2918"}>;
const re: reverseResult = {
  yxp2918: "name",
}

console.log(re["yxp2918"]);
// 分布式条件类型
type PromiseValue<T> = T extends Promise<infer K> ? K : T;

type pv1 = PromiseValue<Promise<'啊哈哈'>>;
type Condition<T> = T extends 1 | 2 | 3 ? T : never;

// 1 | 2 | 3
// 禁用分布式
export type NoDistribute<T> = T & {};

type Wrapped<T> = NoDistribute<T> extends boolean ? "Y" : "N";

type Res1 = Wrapped<number | boolean>; // "N"
type Res2 = Wrapped<true | false>; // "Y"
type Res3 = Wrapped<true | false | 599>; // "N"
// pink
type PinkSelf<T, K extends keyof T> = {
  [P in K]: T[P];
};

type Test1 = {
  "name1": string,
  "name2": string,
  "name3": string,
  "name4": string,
}

type test4 = PinkSelf<Test1, "name1" | "name2">;
type test6 = Omit<Test1, "name3">;

// Exclude
type Demo1 = 1 | 2 | 3 | 4;
type Demo2 = 2 | 3;

type Demo3 = Exclude<Demo1, Demo2>;
type Demo4 = 1 | 2 | 3 | 4 extends 2 | 3 ? never : 1;