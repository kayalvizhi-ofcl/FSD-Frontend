//Create an Object
let person = {
  name: "John",
  age: 25,
  sayHello: function() {
    console.log("Hello, my name is " + this.name);
  }
};

//Access and Modify Properties
// Access properties
console.log(person.name); 
console.log(person.age);  

// Modify properties
person.age = 30;
person.name = "Mike";

console.log(person.name); 
console.log(person.age);  

//Call the Object Method
person.sayHello();