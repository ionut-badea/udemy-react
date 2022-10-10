import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = props => {
  const saveExpense = expense => {
    expense.id = Math.random().toString();
    props.onSave(expense);
  };

  return (
    <div className="new-expense">
      <ExpenseForm onSave={saveExpense} />
    </div>
  );
};

export default NewExpense;
