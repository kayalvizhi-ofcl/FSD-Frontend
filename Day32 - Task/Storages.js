// 1. Promise using async/await
function getData() {
  return new Promise((resolve, reject) => {
    let success = true;

    setTimeout(() => {
      if (success) {
        resolve("Data fetched successfully");
      } else {
        reject("Error fetching data");
      }
    }, 1000);
  });
}

// Async function
async function fetchData() {
  try {
    const result = await getData();
    console.log("Success:", result);
  } catch (error) {
    console.log("Error:", error);
  }
}

fetchData();


// 2. localStorage (Save & Remove)
localStorage.setItem("username", "Kayal");
console.log("Saved in localStorage:", localStorage.getItem("username"));

// Remove value
localStorage.removeItem("username");
console.log("After removal:", localStorage.getItem("username"));


// 3. sessionStorage (Save & Remove)
sessionStorage.setItem("sessionUser", "Kayal");
console.log("Saved in sessionStorage:", sessionStorage.getItem("sessionUser"));

// Remove value
sessionStorage.removeItem("sessionUser");
console.log("After removal:", sessionStorage.getItem("sessionUser"));