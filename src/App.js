import { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import Expenses from "./components/Expenses/Expenses";
import ExpenseForm from "./components/NewExpense/NewExpense";
import NewExpense from "./components/NewExpense/NewExpense";

const DUMMY_EXPENSES = [
  {
    id: 1,
    date: new Date(2021, 2, 10),
    title: "Internet Bills",
    price: "15",
  },
  {
    id: 1,
    date: new Date(2021, 2, 10),
    title: "Food Bills",
    price: "150",
  },
  {
    id: 1,
    date: new Date(2021, 2, 10),
    title: "Electricity Bills",
    price: "8",
  },
  {
    id: 1,
    date: new Date(2021, 2, 10),
    title: "Phone Bills",
    price: "4",
  },
];
function App() {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...expenses];
    });
  };

  return (
    <div className="App">
      <header className="App-header">
        <NewExpense onAddExpense={addExpenseHandler} />
        <Expenses expenseDetails={expenses} />
      </header>
    </div>
  );
}

export default App;
