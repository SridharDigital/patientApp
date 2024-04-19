import React, { useState } from "react";
import FormComponent from "./FormComponent";

function PatientComponent() {
  const [name, setName] = useState("");
  const [place, setPlace] = useState("");
  const [resetTrigger, setResetTrigger] = useState(false);

  const handleDisplay = (newName, newPlace) => {
    setName(newName);
    setPlace(newPlace);
  };

  const handleClear = () => {
    setName("");
    setPlace("");
    setResetTrigger(true);
  };

  return (
    <div className="container">
      <h1>Patient Information</h1>
      <label>Name: {name}</label>
      <label>Place: {place}</label>
      <button className="clearBtn" onClick={handleClear}>
        Clear
      </button>
      <FormComponent
        onDisplay={handleDisplay}
        resetTrigger={resetTrigger}
        onResetHandled={() => setResetTrigger(false)}
      />
    </div>
  );
}

export default PatientComponent;
