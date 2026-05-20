import React, { useRef } from "react";

export default function FocusInput() {
  const inputRef = useRef(null);

  const handleFocus = () => {
    inputRef.current.focus();
  };

  return (
    <div>
      <input
        ref={inputRef}
        type="text"
        placeholder="Type here"
      />

      <button onClick={handleFocus}>
        Focus
      </button>
    </div>
  );
}