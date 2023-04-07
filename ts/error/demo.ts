class Person {
  constructor(public name: string, public age: number) { }

  greet() {
    console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
  }
}

const person = new Person("John", 30);
person.greet();