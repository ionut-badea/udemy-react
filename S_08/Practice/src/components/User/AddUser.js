import { useState } from "react";
import Button from "../UI/Button";
import Card from "../UI/Card";
import classes from "./AddUser.module.css";

const AddUser = props => {
  const [username, setUsername] = useState("");
  const [age, setAge] = useState("");

  const saveUsername = event => setUsername(event.target.value);
  const saveAge = event => setAge(event.target.value);

  const addUserHandler = event => {
    event.preventDefault();
    if (username.trim().length === 0 || age.trim().length === 0) {
      props.logError({
        message: "Input can't be empty",
        title: "Invalid input",
      });
      return;
    }
    if (+age < 1) {
      props.logError({
        message: "Age should be greater than 0",
        title: "Invalid age",
      });
      return;
    }
    props.addUser({ age, id: Math.random(), username });
    setUsername("");
    setAge("");
  };

  return (
    <Card className={classes.input}>
      <form onSubmit={addUserHandler}>
        <label htmlFor="username">Username</label>
        <input
          id="username"
          onChange={saveUsername}
          type="text"
          value={username}
        />
        <label htmlFor="age">Age</label>
        <input id="age" onChange={saveAge} type="number" value={age} />
        <Button type="submit">Add User</Button>
      </form>
    </Card>
  );
};

export default AddUser;
