import React from "react";

function TextInput({
  label,
  type,
  value,
  onChange,
  name
}) {
  return (
    <div style={{ marginBottom: "15px" }}>
      <label>{label}</label>
      <br />

      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        style={{
          padding: "10px",
          width: "250px",
          marginTop: "5px"
        }}
      />
    </div>
  );
}

export default TextInput;