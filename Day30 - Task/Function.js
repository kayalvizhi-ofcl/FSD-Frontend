// Function that accepts a callback
function processUser(name, callback) {
  console.log("Processing user:", name);
  
  // Call the callback function
  callback(name);
}

// Callback function
function greetUser(name) {
  console.log("Hello, " + name + "!");
}

// Using the function
processUser("Kayal", greetUser);