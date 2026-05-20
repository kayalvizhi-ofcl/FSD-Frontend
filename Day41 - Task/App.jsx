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

// import React, { useState } from "react";
// import "./App.css";

// function App() {

//   // Product List
//   const products = [
//     { id: 1, name: "Laptop" },
//     { id: 2, name: "Mobile" },
//     { id: 3, name: "Keyboard" },
//     { id: 4, name: "Mouse" },
//     { id: 5, name: "Headphones" }
//   ];

//   // Filter State
//   const [search, setSearch] = useState("");

//   // Hover State
//   const [hoveredId, setHoveredId] =
//     useState(null);

//   // Filtered Products
//   const filteredProducts = products.filter(
//     (product) =>
//       product.name
//         .toLowerCase()
//         .includes(search.toLowerCase())
//   );

//   return (
//     <div className="container">

//       <h1>Product List</h1>

//       {/* Filter Input */}
//       <input
//         type="text"
//         placeholder="Search product..."
//         value={search}
//         onChange={(e) =>
//           setSearch(e.target.value)
//         }
//         className="search-input"
//       />

//       {/* Conditional Rendering */}
//       {
//         filteredProducts.length > 0 ? (

//           <ul className="product-list">

//             {
//               filteredProducts.map((product) => (

//                 <li
//                   key={product.id}

//                   className={
//                     hoveredId === product.id
//                       ? "product-item active"
//                       : "product-item"
//                   }

//                   onMouseEnter={() =>
//                     setHoveredId(product.id)
//                   }

//                   onMouseLeave={() =>
//                     setHoveredId(null)
//                   }
//                 >
//                   {product.name}
//                 </li>

//               ))
//             }

//           </ul>

//         ) : (

//           <h3>No products available</h3>

//         )
//       }

//     </div>
//   );
// }

// export default App;

// import React, { useState } from "react";
// import TextInput from "./TextInput";

// function App() {

//   // -------------------------
//   // Form State
//   // -------------------------
//   const [form, setForm] = useState({
//     name: "",
//     email: "",
//     password: ""
//   });

//   // Submitted data preview
//   const [submittedData, setSubmittedData] =
//     useState(null);

//   // -------------------------
//   // Validation helpers
//   // -------------------------
//   const isEmailValid = (email) => {
//     return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
//   };

//   const isFormValid =
//     form.name.trim() !== "" &&
//     isEmailValid(form.email) &&
//     form.password.trim() !== "";

//   // -------------------------
//   // Handle Input Change
//   // -------------------------
//   const handleChange = (e) => {
//     setForm({
//       ...form,
//       [e.target.name]: e.target.value
//     });
//   };

//   // -------------------------
//   // Submit Form
//   // -------------------------
//   const handleSubmit = (e) => {
//     e.preventDefault();

//     if (!isFormValid) return;

//     setSubmittedData(form);
//   };

//   // -------------------------
//   // Clear Form
//   // -------------------------
//   const handleClear = () => {
//     setForm({
//       name: "",
//       email: "",
//       password: ""
//     });

//     setSubmittedData(null);
//   };

//   return (
//     <div style={{ padding: "30px" }}>

//       <h1>Signup Form</h1>

//       <form onSubmit={handleSubmit}>

//         {/* Name */}
//         <TextInput
//           label="Name"
//           type="text"
//           name="name"
//           value={form.name}
//           onChange={handleChange}
//         />

//         {/* Email */}
//         <TextInput
//           label="Email"
//           type="email"
//           name="email"
//           value={form.email}
//           onChange={handleChange}
//         />

//         {/* Password */}
//         <TextInput
//           label="Password"
//           type="password"
//           name="password"
//           value={form.password}
//           onChange={handleChange}
//         />

//         {/* Buttons */}
//         <button
//           type="submit"
//           disabled={!isFormValid}
//           style={{
//             padding: "10px",
//             marginRight: "10px",
//             cursor: isFormValid
//               ? "pointer"
//               : "not-allowed"
//           }}
//         >
//           Submit
//         </button>

//         <button
//           type="button"
//           onClick={handleClear}
//           style={{
//             padding: "10px"
//           }}
//         >
//           Clear
//         </button>
//       </form>

//       {/* -------------------------
//           Preview Panel
//       ------------------------- */}
//       <div style={{ marginTop: "30px" }}>
//         <h2>Preview</h2>

//         {submittedData ? (
//           <div>
//             <p>
//               <b>Name:</b>{" "}
//               {submittedData.name}
//             </p>

//             <p>
//               <b>Email:</b>{" "}
//               {submittedData.email}
//             </p>

//             <p>
//               <b>Password:</b>{" "}
//               {submittedData.password}
//             </p>
//           </div>
//         ) : (
//           <p>No data submitted yet</p>
//         )}
//       </div>
//     </div>
//   );
// }

// export default App;

import React, {
  useEffect,
  useState,
  useCallback,
  useMemo
} from "react";

function App() {

  // ---------------------------
  // State
  // ---------------------------
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [filter, setFilter] = useState("");

  // ---------------------------
  // Fetch Users Function
  // ---------------------------
  const fetchUsers = async (signal) => {
    setLoading(true);

    try {
      const res = await fetch(
        "https://jsonplaceholder.typicode.com/users",
        { signal }
      );

      const data = await res.json();
      setUsers(data);

    } catch (err) {
      if (err.name !== "AbortError") {
        console.log("Fetch error:", err);
      }
    } finally {
      setLoading(false);
    }
  };

  // ---------------------------
  // 1. useEffect on mount + filter dependency
  // ---------------------------
  useEffect(() => {
    const controller = new AbortController();

    fetchUsers(controller.signal);

    // ---------------------------
    // 5. Cleanup (abort fetch)
    // ---------------------------
    return () => {
      controller.abort();
      console.log("Fetch aborted / cleanup executed");
    };

  }, [filter]); // 4. refetch when filter changes

  // ---------------------------
  // 2. useCallback (memoized refresh)
  // ---------------------------
  const handleRefresh = useCallback(() => {
    const controller = new AbortController();
    fetchUsers(controller.signal);
  }, []);

  // ---------------------------
  // 3. useMemo (expensive calculation)
  // ---------------------------
  const avgNameLength = useMemo(() => {
    console.log("Calculating expensive value...");

    if (!users.length) return 0;

    const total = users.reduce(
      (sum, user) => sum + user.name.length,
      0
    );

    return (total / users.length).toFixed(2);
  }, [users]);

  // ---------------------------
  // Filtered Users
  // ---------------------------
  const filteredUsers = users.filter((user) =>
    user.name
      .toLowerCase()
      .includes(filter.toLowerCase())
  );

  return (
    <div style={{ padding: "30px" }}>

      <h1>Users List</h1>

      {/* Filter Input */}
      <input
        type="text"
        placeholder="Filter users..."
        value={filter}
        onChange={(e) =>
          setFilter(e.target.value)
        }
        style={{
          padding: "10px",
          marginBottom: "10px"
        }}
      />

      {/* Refresh Button */}
      <button
        onClick={handleRefresh}
        style={{
          marginLeft: "10px",
          padding: "10px"
        }}
      >
        Refresh
      </button>

      {/* Expensive value */}
      <p>
        Average Name Length:{" "}
        <b>{avgNameLength}</b>
      </p>

      {/* Loading */}
      {loading && <p>Loading...</p>}

      {/* Users List */}
      <ul>
        {filteredUsers.map((user) => (
          <li key={user.id}>
            {user.name}
          </li>
        ))}
      </ul>

    </div>
  );
}

export default App;