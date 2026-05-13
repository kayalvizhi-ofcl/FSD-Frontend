import { useState } from "react";

function App() {

  const [darkMode, setDarkMode] = useState(false);

  return (
    <div
      style={{
        backgroundColor: darkMode ? "black" : "white",
        color: darkMode ? "white" : "black",
        height: "100vh",
        padding: "20px"
      }}
    >
      <h2>Dark / Light Mode</h2>

      <button onClick={() => setDarkMode(!darkMode)}>
        Toggle Mode
      </button>
    </div>
  );
}

export default App;