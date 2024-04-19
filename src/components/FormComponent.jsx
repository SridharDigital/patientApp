import React, { useState, useEffect } from "react";

const FormComponent = ({ onDisplay, resetTrigger, onResetHandled }) => {
  const [inputName, setInputName] = useState("");
  const [inputPlace, setInputPlace] = useState("");

  useEffect(() => {
    if (resetTrigger) {
      setInputName("");
      setInputPlace("");
      onResetHandled();
    }
  }, [resetTrigger, onResetHandled]);

  return (
    <div>
      <input
        type="text"
        placeholder="Enter name"
        value={inputName}
        onChange={(e) => setInputName(e.target.value)}
      />
      <br />
      <input
        type="text"
        placeholder="Enter place"
        value={inputPlace}
        onChange={(e) => setInputPlace(e.target.value)}
      />
      <br />
      <button
        className="displatBtn"
        onClick={() => onDisplay(inputName, inputPlace)}
      >
        Display
      </button>
    </div>
  );
};

export default FormComponent;
