import "./Expenses.css";
import ExpenseItems from "./ExpenseItems";
import Card from "../UI/Card";

const Expenses = (props) => {
  return (
    <Card className="expenses">
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
  );
};

export default Expenses;
