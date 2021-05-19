import logo from "./logo.svg";
import "./App.css";
import Expenses from "./components/Expenses/Expenses";

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
        <h2>Let's Get Started</h2>
        <Expenses expenseDetails={expenseDetails} />
      </header>
    </div>
  );
}

export default App;
