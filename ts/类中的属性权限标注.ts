class Animal {
  public name: string;      // 公共属性，可以在类内部和外部访问
  private age: number;     // 私有属性，只能在类内部访问
  protected category: string;  // 受保护属性，只能在类内部和子类中访问

  constructor(name: string, age: number, category: string) {
    this.name = name;
    this.age = age;
    this.category = category;
  }

  public eat() {       // 公共方法，可以在类内部和外部访问
    console.log(`${this.name} is eating.`);
  }

  private sleep() {    // 私有方法，只能在类内部访问
    console.log(`${this.name} is sleeping.`);
  }

  protected run() {    // 受保护方法，只能在类内部和子类中访问
    console.log(`${this.name} is running.`);
  }
}

class Dog extends Animal {
  constructor(name: string, age: number, category: string) {
    super(name, age, category); // 此步骤相当于调用父类的构造函数，所以此处可理解为是父类的构造函数在访问父类的私有属性age
  }
  public play() {
    this.run();    // 子类可以访问父类的受保护方法
  }
}

const animal = new Animal('Tom', 3, 'mammal');
console.log(animal.name);   // 可以访问公共属性 name
// console.log(animal.age); // 无法访问私有属性 age
// console.log(animal.category); // 无法访问受保护属性 category
animal.eat();               // 可以调用公共方法 eat
// animal.sleep();          // 无法调用私有方法 sleep
// animal.run();            // 无法调用受保护方法 run

const dog = new Dog('Bob', 2, 'dog');
console.log(dog.name);      // 可以访问公共属性 name
// console.log(dog.age);    // 无法访问私有属性 age
// console.log(dog.category); // 无法访问受保护属性 category
dog.eat();                  // 可以调用公共方法 eat
// dog.sleep();             // 属性"sleep"为私有属性，只能在类"Animal"中访问
dog.play();                 // 可以访问父类的受保护方法 run