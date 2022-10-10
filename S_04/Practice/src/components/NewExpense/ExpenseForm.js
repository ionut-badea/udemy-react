import { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = props => {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [date, setDate] = useState("");

  // ? This is another way to handle the form submission
  // const [userInput, setUserInput] = useState({
  //   amount: "",
  //   date: "",
  //   title: "",
  // });

  const titleChangeHandler = event => {
    // ! This is the wrong way to do it
    // setUserInput({
    //   ...userInput,
    //   title: event.target.value,
    // });

    // * This is the right way to do it
    // setUserInput(prevState => {
    //   return { ...prevState, title: event.target.value };
    // });

    // * This is the right way to do it
    setTitle(event.target.value);
  };
  const amountChangeHandler = event => {
    setAmount(event.target.value);
  };
  const dateChangeHandler = event => {
    setDate(event.target.value);
  };

  const submitHandler = event => {
    event.preventDefault();
    const data = { amount, date: new Date(date), title };
    setTitle("");
    setAmount("");
    setDate("");
    props.onSave(data);
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input onChange={titleChangeHandler} type="text" value={title} />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            min="1"
            onChange={amountChangeHandler}
            step="1"
            type="number"
            value={amount}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            max="2022-12-31"
            min="2019-12-09"
            onChange={dateChangeHandler}
            type="date"
            value={date}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="button">Cancel</button>
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
