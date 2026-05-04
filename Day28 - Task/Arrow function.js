// 1. Simple arrow function
const greet = name => `Hello, ${name}`;

// 2. Add two numbers
const add = (a, b) => a + b;

// 3. Check even number
const isEven = num => num % 2 === 0;

// 4. Array map with arrow
const numbers = [1, 2, 3];
const squares = numbers.map(n => n * n);

console.log(greet("Kayal"));   // Hello, Kayal
console.log(add(2, 3));        // 5
console.log(isEven(4));        // true
console.log(squares);          // [1, 4, 9]