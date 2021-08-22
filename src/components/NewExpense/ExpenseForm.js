import React, { useState } from "react";
import "./ExpenseForm.css";



const ExpenseForm = props => {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");


  // const [userInput , setUserInput] = useState({
  //   enteredTitle: '',
  //   enteredAmount: '',
  //   enteredDate: ''
  // });

  const titleChangeHandler = event => {
    // setUserInput({
    //   ...userInput , enteredTitle: event.target.value
    // })

    setEnteredTitle(event.target.value);

    // setUserInput((prevState) => {
    //   return { ...prevState, enteredTitle: event.target.value };
    // }) // this is a better approach . this will not mess up scheduled state updates
  };

  const amountChangeHandler = event => {
    // setUserInput({
    //   ...userInput , enteredAmount: event.target.value
    // })

    setEnteredAmount(event.target.value);

    // setUserInput((prevState) => {
    //   return { ...prevState, enteredAmount: event.target.value };
    // })
  };



  const dateChangeHandler = event => {
    
    // setUserInput({
    //   ...userInput , enteredDate: event.target.value
    // })

    setEnteredDate(event.target.value);

    // setUserInput((prevState) => {
    //   return { ...prevState, enteredDate: event.target.value };
    // })
  };

  const submitHandler = event => {
    event.preventDefault();

    const expenseData = {
      title: enteredTitle,
      amount: +enteredAmount,
      date: new Date(enteredDate)
    };
    //console.log(expenseData.enteredDate)
    
    props.onSaveExpenseData(expenseData);
    setEnteredTitle('');
    setEnteredAmount('');
    setEnteredDate('');
    props.onClickHandler(false);
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            onChange={titleChangeHandler}
            type="text"
            value={enteredTitle}
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            onChange={amountChangeHandler}
            value={enteredAmount}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2022-12-31"
            onChange={dateChangeHandler}
            value={enteredDate}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit"> Add Expense </button>
        <button type="Cancel"> Cancel </button> 
      </div>
    </form>
  );
};
export default ExpenseForm;
