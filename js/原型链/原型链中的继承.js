function SuperType() {
  this.property = true
}
SuperType.prototype.getSuperValue = function () {
  return this.property
}
function SubType() {
  this.subproperty = false
}
// 继承 SuperType
SubType.prototype = new SuperType()
SubType.prototype.getSubValue = function () {
  return this.subproperty
}
let instance = new SubType()
console.log(instance.__proto__) // SuperType { property: true, getSubValue: [Function (anonymous)] }
console.log(instance.__proto__.__proto__) // { getSuperValue: [Function (anonymous)] }
console.log(instance.getSuperValue()) // true
console.log(instance.constructor)

// Object.create()
let person = {
  name: 'yxp',
  age: 18,
  friends: ['yxp', 'yxp2', 'yxp3', 'yxp4']
}

const anotherPerson = Object.create(person)
anotherPerson.age = 22
anotherPerson.name = 'anotherPerson'
anotherPerson.friends.push('yxp5')

const person1 = Object.create(person)
person1.name = 'person1'
person1.age = 88
person1.friends.push('yxp6')
console.log(person.name);
console.log(person.age);
console.log(anotherPerson.name)
console.log(anotherPerson.age)
console.log(person1.name)
console.log(person1.age)
console.log(person.friends)
console.log(anotherPerson.friends)
console.log(person1.friends)
