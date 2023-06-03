import React from "react";
import dingSound from "./ding.mp3";
import { useRef } from "react";

const ATMDeposit = ({ onChange, isDeposit, isValid }) => {
  const [errorMessage, setErrorMessage] = React.useState("");
  const numberInputRef = useRef(null);

  const handleChange = (event) => {
    const input = event.target.value;
    if (/^[0-9]*$/.test(input)) {
      setErrorMessage("");
      onChange(event);
    } else {
      setErrorMessage("Please enter numbers only.");
    }
  };

  const handleButtonClick = () => {
    const audio = new Audio(dingSound);
    audio.play();
    numberInputRef.current.value = "";
  };

  const choice = ["Deposit", "Cash Back"];
  console.log(`ATM isDeposit: ${isDeposit}`);
  return (
    <label className="label huge">
      {errorMessage && <p className="error-message">{errorMessage}</p>}
      <h3 className="choice"> {choice[Number(!isDeposit)]}</h3>
      <input
        className="number-input"
        id="number-input"
        type="number"
        width="200"
        handleChange={handleChange}
        ref={numberInputRef}
        onChange={onChange}
        pattern="[0-9]*"
      ></input>
      <input
        type="submit"
        className="submit-input btn"
        disabled={!isValid}
        width="200"
        value="Submit"
        id="submit-input"
        onClick={handleButtonClick}
      ></input>
    </label>
  );
};

export default ATMDeposit;
