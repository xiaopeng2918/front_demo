function Parent() {
  this.name = 'Parent'
  this.age = 18
}

Parent.prototype.sayHello = function () {
  // 原型对象绑定一个方法
  console.log("Hello, I'm " + this.name)
}

function Child() {
  this.name = 'Child'
}

// 实现 Child 继承 Parent
Child.prototype = Object.create(Parent.prototype)
console.log(Child.prototype.constructor) // [Function: Parent]
var child = new Child()

Object.defineProperty(child, 'sex', {
  value: '男'
})

console.log(child.prototype) // undefined
console.log(child.__proto__) // Parent { constructor: [Function: Child] }
console.log(child.constructor) // [Function: Child]
child.sayHello() // 输出：Hello, I'm Child

for (let key in child) {
  console.log(key) // name sayHello
}

console.log(Object.keys(child))
console.log(Object.getOwnPropertyNames(child)) // [ 'name', 'sex' ]

// 属性遍历顺序
const obj = {
  1: 1,
  name: 'yxp',
  2: 2,
  age: 25,
  3: 3
}

console.log(Object.keys(obj))
for (let key in obj) {
  console.log(key + 'for in')
}

const obj2 = {}

const obj3 = Object.assign(obj2, obj)

obj3.friend = ['yxp1', 'yxp2']

console.log(obj3 === obj2)
console.log(obj3)

// 对象迭代
// Object.values

console.log(Object.values(obj3)) // [ 1, 2, 3, 'yxp', 25 ]
console.log(Object.entries(obj3))
const valueResult = Object.values(obj3)
const entriesResult = Object.entries(obj3)
console.log(valueResult[5] === obj3.friend) // true
console.log(entriesResult[5][1] === obj3.friend) // true
console.log(String.prototype)

console.log(Object.values(child)) // [ 'Child' ]
console.log(Object.entries(child))
