import React from "react";
import "./ExpenseItems.css";
import ExpenseDate from "./ExpenseDate";

const ExpenseItems = (props) => {
  return (
    <div className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{props.expense}</h2>
        <div className="expense-item__price">{props.price}</div>
      </div>
    </div>
  );
};

export default ExpenseItems;
