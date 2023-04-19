// 定义基类 Animal
function Animal() {}

Animal.prototype.makeSound = function () {
  console.log('The animal makes a sound')
}

// 定义派生类 Dog
function Dog() {}

Dog.prototype = Object.create(Animal.prototype)
Dog.prototype.constructor = Dog

Dog.prototype.makeSound = function () {
  console.log('The dog barks')
}

// 定义派生类 Cat
function Cat() {}

Cat.prototype = Object.create(Animal.prototype)
Cat.prototype.constructor = Cat

Cat.prototype.makeSound = function () {
  console.log('The cat meows')
}
let myAnimal = new Dog(); // 使用基类的引用指向派生类的对象
myAnimal.makeSound(); // 调用 Dog 类的 makeSound() 方法

let myAnimal2 = new Cat(); // 重新将基类的引用指向另一个派生类的对象
myAnimal2.makeSound(); // 调用 Cat 类的 makeSound() 方法
myAnimal.makeSound()