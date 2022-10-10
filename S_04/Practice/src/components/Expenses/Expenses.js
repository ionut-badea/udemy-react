import { useState } from "react";
import Card from "../UI/Card";
import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
import ExpensesFilter from "./ExpensesFilter";

const Expenses = props => {
  const { expenses } = props;
  const [year, setYear] = useState("2020");

  const selectYear = year => setYear(year);

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter onSelectYear={selectYear} selectedYear={year} />
        {expenses
          .filter(expense => {
            return expense.date.getFullYear().toString() === year;
          })
          .map(expense => (
            <ExpenseItem
              amount={expense.amount}
              date={expense.date}
              key={expense.id}
              title={expense.title}
            />
          ))}
      </Card>
    </div>
  );
};

export default Expenses;
