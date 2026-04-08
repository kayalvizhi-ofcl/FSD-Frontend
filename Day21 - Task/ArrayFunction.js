const numbers = [2, 5, 8, 11, 14];

// 1. Use map to double all numbers
const doubled = numbers.map(num => num * 2);
console.log(doubled); 

// 2. Use filter to get even numbers
const evens = numbers.filter(num => num % 2 === 0);
console.log(evens);

// 3. Use reduce to find the sum
const sum = numbers.reduce((acc, curr) => acc + curr, 0);
console.log(sum); 

// 4. Find the first number greater than 10
const firstGreaterThan10 = numbers.find(num => num > 10);
console.log(firstGreaterThan10);

// 5. Check if array includes a specific value
const hasEight = numbers.includes(8);
console.log(hasEight); 