import React from "react";
import { useState } from "react";
import "./Expense.css";
export const Expense = ({ onTodos }) => {
  const [textInput, setText] = useState("");
  const [numberInput, setNumber] = useState("");
  const inputChangeUserName = (event) => {
    setText(event.target.value);
  };
  const inputChangeUserAge = (event) => {
    setNumber(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    if (textInput.trim().length !== 0 && numberInput.trim().length !== 0) {
      onTodos(textInput, numberInput);
      // console.log(textInput);
      // console.log(numberInput);
      setNumber("");
      setText("");
    }
  };
  return (
    <div className="containerForm">
      <form action="" className="form">
        <label htmlFor="name">Username</label>
        <input
          type="text"
          name="name"
          id="name"
          value={textInput}
          onChange={inputChangeUserName}
        />
        <label htmlFor="age">Age(years)</label>
        <input
          type="number"
          name="age"
          id="age"
          value={numberInput}
          onChange={inputChangeUserAge}
        />
        <button className="add-btn" onClick={submitHandler}>
          Add User
        </button>
      </form>
    </div>
  );
};
