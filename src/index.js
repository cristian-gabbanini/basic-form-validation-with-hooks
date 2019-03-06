import React from "react";
import ReactDOM from "react-dom";
import useValidator from "./useValidator";
import { isRequired, minLenght } from "./validators";
import "./styles.css";

function App() {
  const [firstName, errors, setFirstName] = useValidator("", [
    isRequired,
    minLenght(5)
  ]);

  function handleInputChange(e) {
    setFirstName(e.target.value);
  }
  return (
    <div className="App">
      <input
        type="text"
        name="firstnanme"
        onChange={handleInputChange}
        value={firstName}
      />
      <ul className="errors">
        {errors.current.length > 0
          ? errors.current.map(error => <li key={error}>{error}</li>)
          : ""}
      </ul>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
