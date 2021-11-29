import { useState } from "react";
import "../Expenses/Expenses.css";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";

const Expenses = (props) => {
  const [filterYear, setFilterYear] = useState("2020");

  const filterChangeHandler = (selectYear) => {
    setFilterYear(selectYear);
  };

  const yearExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === filterYear;
  });



  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          yearInput={filterYear}
          changeFilter={filterChangeHandler}
        />
				<ExpensesChart expense={yearExpenses} />
				<ExpensesList items={yearExpenses}/>
      </Card>
    </div>
  );
};

export default Expenses;
