let globalVar = "I am global"; // Global scope

function testScope() {
    let localVar = "I am local"; // Local scope
    console.log(globalVar); // Accessible
    console.log(localVar);  // Accessible
}

testScope();

console.log(globalVar); // Accessible
// console.log(localVar); // Error: localVar is not defined