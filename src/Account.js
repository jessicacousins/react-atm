import React from "react";
import ATMDeposit from "./ATMDeposit";

const Account = () => {
  const [deposit, setDeposit] = React.useState(0);
  const [totalState, setTotalState] = React.useState(0);
  const [isDeposit, setIsDeposit] = React.useState(true);
  const [atmMode, setAtmMode] = React.useState("");
  const [validTransaction, setValidTransaction] = React.useState(false);
  const [errorMessage, setErrorMessage] = React.useState("");

  let status = `Account Balance $ ${totalState} `;

  const handleChange = (event) => {
    if (Number(event.target.value) <= 0) {
      return setValidTransaction(false);
    }
    if (atmMode === "Cash Back" && Number(event.target.value) > totalState) {
      setValidTransaction(false);
    } else {
      setValidTransaction(true);
    }
    setDeposit(Number(event.target.value));
  };
  const handleSubmit = (event) => {
    if (!isDeposit && deposit > totalState) {
      setErrorMessage("You're overdrawn!");
      return;
    }

    let newTotal = isDeposit ? totalState + deposit : totalState - deposit;
    setTotalState(newTotal);
    setValidTransaction(false);
    setErrorMessage("");
    event.preventDefault();
  };

  const handleModeSelect = (event) => {
    console.log(event.target.value);
    setAtmMode(event.target.value);
    setValidTransaction(false);
    if (event.target.value === "Deposit") {
      setIsDeposit(true);
    } else {
      setIsDeposit(false);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <>
        <h2 id="total">{status}</h2>
        <label>Select an action to continue</label>
        <select
          onChange={(e) => handleModeSelect(e)}
          name="mode"
          id="mode-select"
        >
          <option id="no-selection" value=""></option>
          <option id="deposit-selection" value="Deposit">
            Deposit
          </option>
          <option id="cashback-selection" value="Cash Back">
            Cash Back
          </option>
        </select>
        {atmMode && (
          <ATMDeposit
            onChange={handleChange}
            isDeposit={isDeposit}
            isValid={validTransaction}
          ></ATMDeposit>
        )}
        {errorMessage && <p className="error-message">{errorMessage}</p>}
      </>
    </form>
  );
};

export default Account;
