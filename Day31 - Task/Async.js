// 1. Function that accepts a callback
function processData(data, callback) {
  console.log("Processing:", data);
  callback(data);
}

// Callback function
function displayData(result) {
  console.log("Callback Result:", result);
}

// Call the function
processData("Hello", displayData);


// 2. Create a Promise
function checkNumber(num) {
  return new Promise((resolve, reject) => {
    if (num > 0) {
      resolve("Number is positive");
    } else {
      reject("Number is negative or zero");
    }
  });
}


// 3. Handle Promise using then & catch
checkNumber(5)
  .then(result => {
    console.log("Success:", result);
  })
  .catch(error => {
    console.log("Error:", error);
  });


// Try rejection case
checkNumber(-2)
  .then(result => {
    console.log("Success:", result);
  })
  .catch(error => {
    console.log("Error:", error);
  });