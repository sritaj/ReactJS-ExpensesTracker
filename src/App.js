import logo from "./logo.svg";
import "./App.css";
import Expenses from "./components/Expenses/Expenses";
import ExpenseForm from "./components/NewExpense/NewExpense";
import NewExpense from "./components/NewExpense/NewExpense";

function App() {
  const expenseDetails = [
    {
      id: 1,
      date: new Date(2021, 2, 10),
      expense: "Internet Bills",
      price: "15$",
    },
    {
      id: 1,
      date: new Date(2021, 2, 10),
      expense: "Food Bills",
      price: "150$",
    },
    {
      id: 1,
      date: new Date(2021, 2, 10),
      expense: "Electricity Bills",
      price: "8$",
    },
    {
      id: 1,
      date: new Date(2021, 2, 10),
      expense: "Phone Bills",
      price: "4$",
    },
  ];

  const addExpenseHandler = (expense) => {
    console.log(expense);
  };

  return (
    <div className="App">
      <header className="App-header">
        <NewExpense onAddExpense={addExpenseHandler} />
        <Expenses expenseDetails={expenseDetails} />
      </header>
    </div>
  );
}

export default App;
