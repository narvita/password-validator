import React, { useEffect, useRef, useState } from "react";
import "./App.css";

function App() {
  const password = useRef(null);
  const [isValidate, setValidation] = useState(false);
  const pattern = new RegExp(
    "^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[-+_!@#$%^&*.,?]).+$"
  );


  let validate = isValidate ? 'True' : "false"

  function StringChallenge(str) {
    if (str.length < 7 || str.length > 31) {
      return false;
    } else if (str.includes("password")) {
      return false;
    } else if (pattern.test(str)) {
      return true;
    }
    return false;
  }

  const handleClick = () => {
    let isValid = StringChallenge(password.current.value);
    console.log(isValid, "hhhhhh");
    setValidation(isValid);

    console.log(isValidate);
  };

  return (
    <div>
      <input ref={password} />
      <button onClick={handleClick}>Check validation</button>
      <h2>password is {validate}</h2>
    </div>
  );
}

export default App;
