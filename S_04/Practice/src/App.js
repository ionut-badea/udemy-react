import { useState } from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const App = () => {
  const allExpenses = [
    {
      amount: 94.12,
      date: new Date(2020, 7, 14),
      id: "e1",
      title: "Toilet Paper",
    },
    { amount: 799.49, date: new Date(2022, 2, 12), id: "e2", title: "New TV" },
    {
      amount: 294.67,
      date: new Date(2021, 2, 28),
      id: "e3",
      title: "Car Insurance",
    },
    {
      amount: 450,
      date: new Date(2019, 5, 12),
      id: "e4",
      title: "New Desk (Wooden)",
    },
  ];

  const [expenses, setExpenses] = useState(allExpenses);

  const saveExpense = expense => {
    setExpenses(prevState => prevState.push(expense));
  };

  return (
    <div>
      <NewExpense onSave={saveExpense} />
      <Expenses expenses={expenses} />
    </div>
  );
};

export default App;
