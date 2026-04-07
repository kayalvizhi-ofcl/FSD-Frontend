// Create an array
let arr = [10, 20, 30];

// push() - add element at the end
arr.push(40);
console.log("After push:", arr);

// pop() - remove last element
arr.pop();
console.log("After pop:", arr);

// unshift() - add element at the beginning
arr.unshift(5);
console.log("After unshift:", arr);

// shift() - remove first element
arr.shift();
console.log("After shift:", arr);

// Print all elements using for loop
console.log("Array elements:");
for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}