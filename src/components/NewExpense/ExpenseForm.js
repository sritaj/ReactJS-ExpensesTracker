import "./ExpenseForm.css";
const ExpenseForm = () => {
  return (
    <form>
      <div className="new-expense_controls">
        <div className="new-expense_control">
          <label>Title</label>
          <input type="text"></input>
        </div>
        <div className="new-expense_control">
          <label>Amount</label>
          <input type="number" min="0.01" step="0.01"></input>
        </div>
        <div className="new-expense_control">
          <label>Date</label>
          <input type="date" min="2019-01-01" step="2022-12-31"></input>
        </div>
      </div>
      <div className="new-expense_actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
