console.log(sum(2, 3)); // 5
// console.log(sum2(2, 3)); // 报错 Cannot access 'sum2' before initialization  
function sum(a, b) {
  return a + b;
}
let sum2 = function (a, b) {
  return a + b;
};

// 箭头函数
let sum3 = (a, b) => {
  return a + b;
}
// 构造函数声明函数
let sum4 = new Function("num1", "num2", "return num1 + num2");
console.log(sum4(2, 3)); // 5

let double = (x) => { return x * 2 };
let triple = x => { return x * 3 };

let getRandom = () => { return Math.random() };
let sum5 = (a, b) => {return a + b};

let triple2 = x => x * 3;

// 无效的写法
// let multiply = (a, b) => return a * b;

let multiply = (a, b) => {return a * b};
let Multiply = (a, b) => a * b;