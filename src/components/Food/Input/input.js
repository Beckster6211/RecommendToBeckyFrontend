import React, { useState } from "react";

function Input({ addToList }) {
  const [text, setText] = useState("");
  const [enteredText, setEnteredText] = useState("");

  return (
    <div>
      <input
        type="text"
        onChange={(event) => {
          setText(event.target.value);
        }}
      />
      <button
        onClick={() => {
          addToList(text);
        }}
      >
        +
      </button>
    </div>
  );
}

export default Input;
