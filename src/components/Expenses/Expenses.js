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
        <ExpenseItems
          date={props.expenseDetails[0].date}
          expense={props.expenseDetails[0].expense}
          price={props.expenseDetails[0].price}
        />
        <ExpenseItems
          date={props.expenseDetails[1].date}
          expense={props.expenseDetails[1].expense}
          price={props.expenseDetails[1].price}
        />
        <ExpenseItems
          date={props.expenseDetails[2].date}
          expense={props.expenseDetails[2].expense}
          price={props.expenseDetails[2].price}
        />
        <ExpenseItems
          date={props.expenseDetails[3].date}
          expense={props.expenseDetails[3].expense}
          price={props.expenseDetails[3].price}
        />
      </Card>
    </div>
  );
};

export default Expenses;
