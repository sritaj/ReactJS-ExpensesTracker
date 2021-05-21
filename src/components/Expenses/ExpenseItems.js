import React from "react";
import "./ExpenseItems.css";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";

const ExpenseItems = (props) => {
  const clickHandler = () => {
    console.log("Clicked");
  };
  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{props.expense}</h2>
        <div className="expense-item__price">{props.price}</div>
        <button onClick={clickHandler}>Change Title</button>
      </div>
    </Card>
  );
};

export default ExpenseItems;
