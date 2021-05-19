import logo from "./logo.svg";
import "./App.css";
import ExpenseItems from "./components/ExpenseItems";

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
  return (
    <div className="App">
      <header className="App-header">
        <h1>Let's Get Started</h1>
        <ExpenseItems
          date={expenseDetails[0].date}
          expense={expenseDetails[0].expense}
          price={expenseDetails[0].price}
        />
        <ExpenseItems
          date={expenseDetails[1].date}
          expense={expenseDetails[1].expense}
          price={expenseDetails[1].price}
        />
        <ExpenseItems
          date={expenseDetails[2].date}
          expense={expenseDetails[2].expense}
          price={expenseDetails[2].price}
        />
        <ExpenseItems
          date={expenseDetails[3].date}
          expense={expenseDetails[3].expense}
          price={expenseDetails[3].price}
        />
      </header>
    </div>
  );
}

export default App;
