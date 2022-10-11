import { useRef } from "react";
import Button from "../UI/Button";
import Card from "../UI/Card";
import classes from "./AddUser.module.css";

const AddUser = props => {
  const username = useRef();
  const age = useRef();

  const addUserHandler = event => {
    event.preventDefault();
    if (
      username.current.value.trim().length === 0 ||
      age.current.value.trim().length === 0
    ) {
      props.logError({
        message: "Input can't be empty",
        title: "Invalid input",
      });
      return;
    }
    if (+age.current.value < 1) {
      props.logError({
        message: "Age should be greater than 0",
        title: "Invalid age",
      });
      return;
    }
    props.addUser({
      age: age.current.value,
      id: Math.random(),
      username: username.current.value,
    });
    // ! Not recommended to change DOM outside of React
    username.current.value = "";
    age.current.value = "";
  };

  return (
    <Card className={classes.input}>
      <form onSubmit={addUserHandler}>
        <label htmlFor="username">Username</label>
        <input id="username" ref={username} type="text" />
        <label htmlFor="age">Age</label>
        <input id="age" ref={age} type="number" />
        <Button type="submit">Add User</Button>
      </form>
    </Card>
  );
};

export default AddUser;
