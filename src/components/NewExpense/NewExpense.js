import { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = (props) => {
  const [addExpense, setAddExpense] = useState(false);

  const addExpenseHandler = () => {
    setAddExpense(true);
  };

  const cancelExpenseHandler = () => {
    setAddExpense(false);
  };

  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
		setAddExpense(false);
  };

  return (
    <div className="new-expense">
      {!addExpense && <button onClick={addExpenseHandler}>Add Expense</button>}
      {addExpense && (
        <ExpenseForm
          onSaveExpenseData={saveExpenseDataHandler}
          onCancel={cancelExpenseHandler}
        />
      )}
    </div>
  );
};

export default NewExpense;
