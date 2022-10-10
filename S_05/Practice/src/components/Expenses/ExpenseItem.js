import Card from "../UI/Card";
import ExpsenseDate from "./ExpenseDate";
import "./ExpenseItem.css";

const ExpenseItem = props => {
  const { amount, date, title } = props;

  return (
    <li>
      <Card className="expense-item">
        <ExpsenseDate date={date} />
        <div className="expense-item__description">
          <h2>{title}</h2>
          <div className="expense-item__price">$ {amount}</div>
        </div>
      </Card>
    </li>
  );
};

export default ExpenseItem;
