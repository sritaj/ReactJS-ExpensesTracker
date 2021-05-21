import { useState } from "react";
import "./Expenses.css";
import ExpenseItems from "./ExpenseItems";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState("2021");

  const filterChangeHandler = (yearSelected) => {
    console.log(yearSelected);
    setFilteredYear(yearSelected);
  };

  const filteredExpenses = props.expenseDetails.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  let filteredExpensesContent = <p>No Expenses found for the selected year </p>;

  if (filteredExpenses.length > 0) {
    filteredExpensesContent = filteredExpenses.map((expense) => (
      <ExpenseItems
        key={expense.id}
        title={expense.title}
        date={expense.date}
        price={expense.price}
      />
    ));
  }

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={filteredYear}
          onYearFilter={filterChangeHandler}
        />
        {filteredExpensesContent}
      </Card>
    </div>
  );
};

export default Expenses;
