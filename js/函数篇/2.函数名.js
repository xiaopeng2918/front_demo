function sum(num1, num2){
  return num1 + num2;
}

console.log(sum(5, 5)); // 10

let anotherSum = sum; // 使anotherSum指针指向 sum指针 指向的函数体
console.log(anotherSum(10, 10)); // 20

sum = null; // sum指向null 但是anotherSum指针 仍指向 先前sum指针 指向的函数体
console.log(anotherSum(2, 2)); // 4
console.log(sum); // null