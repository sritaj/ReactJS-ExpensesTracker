import { useState } from "react";
import "./Expenses.css";
import ExpenseItems from "./ExpenseItems";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState("2020");
  const filterChangeHandler = (yearSelected) => {
    console.log(yearSelected);
    setFilteredYear(yearSelected);
  };

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={filteredYear}
          onYearFilter={filterChangeHandler}
        />
        {props.expenseDetails.map((expense) => (
          <ExpenseItems
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
