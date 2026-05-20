// import React, {
//   useState,
//   useReducer,
//   useRef,
//   useEffect
// } from "react";

// import Layout from "./Layout";
// import Button from "./Button";
// import UserCard from "./UserCard";

// // -----------------------------------
// // Counter Initial State
// // -----------------------------------

// const initialState = {
//   count: 0
// };

// // -----------------------------------
// // Reducer Function
// // -----------------------------------

// function reducer(state, action) {

//   switch (action.type) {

//     case "INCREMENT":
//       return {
//         count: state.count + 1
//       };

//     case "DECREMENT":
//       return {
//         count: state.count - 1
//       };

//     case "RESET":
//       return {
//         count: 0
//       };

//     default:
//       return state;
//   }
// }

// // -----------------------------------
// // localStorage Functions
// // -----------------------------------

// const STORAGE_KEY = "counter_state";

// // Load counter from localStorage
// function loadCounterState() {

//   const savedState =
//     localStorage.getItem(STORAGE_KEY);

//   if (savedState) {
//     return JSON.parse(savedState);
//   }

//   return initialState;
// }

// // Save counter to localStorage
// function saveCounterState(state) {

//   localStorage.setItem(
//     STORAGE_KEY,
//     JSON.stringify(state)
//   );
// }

// // -----------------------------------
// // App Component
// // -----------------------------------

// function App() {

//   // Alert Button
//   const handleClick = () => {
//     alert("Button Clicked!");
//   };

//   // Text State
//   const [text, setText] = useState("");

//   // Dark Mode State
//   const [darkMode, setDarkMode] =
//     useState(false);

//   // useReducer Counter
//   const [state, dispatch] = useReducer(
//     reducer,
//     initialState,
//     loadCounterState
//   );

//   // Save counter automatically
//   useEffect(() => {
//     saveCounterState(state);
//   }, [state]);

//   // useRef
//   const inputRef = useRef(null);

//   // Focus Input Function
//   const handleFocus = () => {
//     inputRef.current.focus();
//   };

//   return (
//     <div
//       style={{
//         backgroundColor:
//           darkMode ? "black" : "white",

//         color:
//           darkMode ? "white" : "black",

//         minHeight: "100vh",
//         padding: "20px"
//       }}
//     >

//       <Layout>

//         {/* User Card */}
//         <UserCard
//           name="Kayal"
//           age={20}
//         />

//         <br />

//         {/* Alert Button */}
//         <Button
//           label="Click Me"
//           onClick={handleClick}
//         />

//         <br /><br />

//         {/* Live Text Preview */}
//         <h2>Live Text Preview</h2>

//         <input
//           ref={inputRef}
//           type="text"
//           placeholder="Type something..."
//           value={text}
//           onChange={(e) =>
//             setText(e.target.value)
//           }
//         />

//         {/* Focus Button */}
//         <button
//           onClick={handleFocus}
//           style={{
//             marginLeft: "10px"
//           }}
//         >
//           Focus
//         </button>

//         <p>
//           You typed: {text}
//         </p>

//         <br />

//         {/* Counter */}
//         <h2>Counter</h2>

//         <h3>
//           Count: {state.count}
//         </h3>

//         <button
//           onClick={() =>
//             dispatch({
//               type: "INCREMENT"
//             })
//           }
//         >
//           Increment
//         </button>

//         <button
//           onClick={() =>
//             dispatch({
//               type: "DECREMENT"
//             })
//           }
//           style={{
//             marginLeft: "10px"
//           }}
//         >
//           Decrement
//         </button>

//         <button
//           onClick={() =>
//             dispatch({
//               type: "RESET"
//             })
//           }
//           style={{
//             marginLeft: "10px"
//           }}
//         >
//           Reset
//         </button>

//         <br /><br />

//         {/* Dark Mode */}
//         <Button
//           label="Toggle Dark/Light Mode"
//           onClick={() =>
//             setDarkMode(!darkMode)
//           }
//         />

//       </Layout>

//     </div>
//   );
// }

// export default App;

import React, { useState } from "react";
import "./App.css";

function App() {

  // Product List
  const products = [
    { id: 1, name: "Laptop" },
    { id: 2, name: "Mobile" },
    { id: 3, name: "Keyboard" },
    { id: 4, name: "Mouse" },
    { id: 5, name: "Headphones" }
  ];

  // Filter State
  const [search, setSearch] = useState("");

  // Hover State
  const [hoveredId, setHoveredId] =
    useState(null);

  // Filtered Products
  const filteredProducts = products.filter(
    (product) =>
      product.name
        .toLowerCase()
        .includes(search.toLowerCase())
  );

  return (
    <div className="container">

      <h1>Product List</h1>

      {/* Filter Input */}
      <input
        type="text"
        placeholder="Search product..."
        value={search}
        onChange={(e) =>
          setSearch(e.target.value)
        }
        className="search-input"
      />

      {/* Conditional Rendering */}
      {
        filteredProducts.length > 0 ? (

          <ul className="product-list">

            {
              filteredProducts.map((product) => (

                <li
                  key={product.id}

                  className={
                    hoveredId === product.id
                      ? "product-item active"
                      : "product-item"
                  }

                  onMouseEnter={() =>
                    setHoveredId(product.id)
                  }

                  onMouseLeave={() =>
                    setHoveredId(null)
                  }
                >
                  {product.name}
                </li>

              ))
            }

          </ul>

        ) : (

          <h3>No products available</h3>

        )
      }

    </div>
  );
}

export default App;