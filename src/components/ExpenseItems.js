import React from "react";
import "./ExpenseItems.css";

const ExpenseItems = (props) => {
  const month = props.date.toLocaleString("en-US", { month: "long" });
  const day = props.date.toLocaleString("en-US", { day: "2-digit" });
  const year = props.date.getFullYear();
  return (
    <div className="expense-item">
      <div>{month} </div>
      <div>{day}</div>
      <div>{year}</div>
      <div className="expense-item__description">
        <h2>{props.expense}</h2>
        <div className="expense-item__price">{props.price}</div>
      </div>
    </div>
  );
};

export default ExpenseItems;
