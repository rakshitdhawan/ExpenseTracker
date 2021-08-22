import React, { useState } from "react";
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";

const NewExpense = props => {
  const [addNewExpense, setAddNewExpense] = useState(false);
  const saveExpenseDataHandler = enteredExpenseData => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString()
    };
    props.onAddExpense(expenseData);
  };

  const addNewExpenseFunction = () => {
    toggleAddNewExpense(true)
  }
  const toggleAddNewExpense = toggleValue => {
    setAddNewExpense(toggleValue);
  };

  return (
    <div className="new-expense">
      {!addNewExpense && (
        <button onClick={addNewExpenseFunction}>Add New Expense</button>
      )}
      {addNewExpense && (
        <ExpenseForm
          onSaveExpenseData={saveExpenseDataHandler}
          onClickHandler={toggleAddNewExpense}
        />
      )}
    </div>
  );
};

export default NewExpense;
