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

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={filteredYear}
          onYearFilter={filterChangeHandler}
        />
        {filteredExpenses.map((expense) => (
          <ExpenseItems
            key={expense.id}
            title={expense.title}
            date={expense.date}
            price={expense.price}
          />
        ))}
      </Card>
    </div>
  );
};

export default Expenses;
