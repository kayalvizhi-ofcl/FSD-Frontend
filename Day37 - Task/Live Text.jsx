import { useState } from "react";

function App() {

  const [text, setText] = useState("");

  return (
    <div>
      <h2>Live Preview</h2>

      <input
        type="text"
        placeholder="Type something..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />

      <p>You typed: {text}</p>
    </div>
  );
}

export default App;