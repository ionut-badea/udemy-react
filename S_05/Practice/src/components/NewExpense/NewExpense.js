import { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = props => {
  const [showForm, setShowForm] = useState(false);

  const cancel = () => setShowForm(false);
  const show = () => setShowForm(true);

  const saveExpense = expense => {
    expense.id = Math.random().toString();
    props.onSave(expense);
  };

  return (
    <div className="new-expense">
      {!showForm && (
        <button onClick={show} type="button">
          Add New Expense
        </button>
      )}
      {showForm && <ExpenseForm onCancel={cancel} onSave={saveExpense} />}
    </div>
  );
};

export default NewExpense;
