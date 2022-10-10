import React, { useState } from "react";

import Button from "../../UI/Button/Button";
import styles from "./CourseInput.module.css";

// ? Styled component
// import styled from "styled-components";
// const FormControl = styled.div`
//   margin: 0.5rem 0;
//   & label {
//     display: block;
//     font-weight: bold;
//     margin-bottom: 0.5rem;
//     color: ${props => props["invalid"] && "red"};
//   }

//   & input {
//     border: 1px solid ${props => (props["invalid"] ? "red" : "#ccc")};
//     background: ${props => (props["invalid"] ? "#ffd7d7" : "transparent")};
//     display: block;
//     font: inherit;
//     line-height: 1.5rem;
//     padding: 0 0.25rem;
//     width: 100%;
//   }

//   & input:focus {
//     background: #fad0ec;
//     border-color: #8b005d;
//     outline: none;
//   }
// `;

const CourseInput = props => {
  const [enteredValue, setEnteredValue] = useState("");
  const [isValid, setIsValid] = useState(true);

  const goalInputChangeHandler = event => {
    if (event.target.value.trim().length > 0) {
      setIsValid(true);
    }
    setEnteredValue(event.target.value);
  };

  const formSubmitHandler = event => {
    event.preventDefault();
    if (enteredValue.trim().length === 0) {
      setIsValid(false);
      return;
    }
    props.onAddGoal(enteredValue);
  };

  return (
    <form onSubmit={formSubmitHandler}>
      <div
        className={`${styles["form-control"]} ${!isValid && styles.invalid}`}
      >
        <label>Course Goal</label>
        <input onChange={goalInputChangeHandler} type="text" />
      </div>
      <Button type="submit">Add Goal</Button>
    </form>
  );
};

export default CourseInput;
