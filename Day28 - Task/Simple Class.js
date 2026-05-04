class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greet() {
    return `Hi, I am ${this.name} and I am ${this.age} years old.`;
  }
}

// Create object
const p1 = new Person("Kayal", 20);

console.log(p1.greet());