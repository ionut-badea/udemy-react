import { useRef, useState } from "react";
import Input from "../../UI/Input";
import classes from "./MealItemForm.module.css";

const MealItemForm = props => {
  const [amountIsValid, setAmountIsValid] = useState(true);
  const inputRef = useRef();

  const submitHandler = event => {
    event.preventDefault();
    const amount = inputRef.current.value;
    const amountNumber = +amount;
    if (amount.trim().length === 0 || amountNumber < 1 || amountNumber > 5) {
      setAmountIsValid(false);
      return;
    }
    props.addToCart(amountNumber);
  };

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <Input
        input={{
          id: "amount_" + props.id,
          type: "number",
          min: "1",
          max: "5",
          step: "1",
          defaultValue: "1",
        }}
        label="Amount"
        ref={inputRef}
      />
      <button>+ Add</button>
      {!amountIsValid && <p>Please enter a valid input (1-5).</p>}
    </form>
  );
};

export default MealItemForm;
