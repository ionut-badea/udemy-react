import Card from "../UI/Card";
import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";

const Expenses = props => {
  const { expenses } = props;

  return (
    <Card className="expenses">
      {expenses.map(expense => (
        <ExpenseItem
          amount={expense.amount}
          date={expense.date}
          key={expense.id}
          title={expense.title}
        />
      ))}
    </Card>
  );
};

export default Expenses;
