const objArr = {
  0: 1,
  1: 2,
  2: 3,
  length: 3
};
const newArr = Array.prototype.slice.call(objArr, 0);
console.log(newArr instanceof Array); // true
newArr.forEach(item => console.log(item * 2)); // 2 4 6