import React, { useEffect, useState } from "react";

import Button from "../UI/Button/Button";
import Card from "../UI/Card/Card";
import classes from "./Login.module.css";

const Login = props => {
  const [enteredEmail, setEnteredEmail] = useState("");
  const [emailIsValid, setEmailIsValid] = useState();
  const [enteredPassword, setEnteredPassword] = useState("");
  const [passwordIsValid, setPasswordIsValid] = useState();
  const [formIsValid, setFormIsValid] = useState(false);

  // ? useEffect by default at mount and every time dependencies are changing
  useEffect(() => {
    const interval = setTimeout(() => {
      console.log("check");
      setFormIsValid(
        enteredEmail.includes("@") && enteredPassword.trim().length > 6,
      );
    }, 1500);

    // ? this function (clean up function) runs:
    // ? - before every time useEffect is activated, starting with second run, so is not running when componet is mounted
    // ? - at unmount time
    return () => {
      console.log("clear");
      clearInterval(interval);
    };
  }, [enteredEmail, enteredPassword]);

  const emailChangeHandler = event => {
    setEnteredEmail(event.target.value);
  };

  const passwordChangeHandler = event => {
    setEnteredPassword(event.target.value);
  };

  const validateEmailHandler = () => {
    setEmailIsValid(enteredEmail.includes("@"));
  };

  const validatePasswordHandler = () => {
    setPasswordIsValid(enteredPassword.trim().length > 6);
  };

  const submitHandler = event => {
    event.preventDefault();
    props.onLogin(enteredEmail, enteredPassword);
  };

  return (
    <Card className={classes.login}>
      <form onSubmit={submitHandler}>
        <div
          className={`${classes.control} ${
            emailIsValid === false ? classes.invalid : ""
          }`}
        >
          <label htmlFor="email">E-Mail</label>
          <input
            id="email"
            onBlur={validateEmailHandler}
            onChange={emailChangeHandler}
            type="email"
            value={enteredEmail}
          />
        </div>
        <div
          className={`${classes.control} ${
            passwordIsValid === false ? classes.invalid : ""
          }`}
        >
          <label htmlFor="password">Password</label>
          <input
            id="password"
            onBlur={validatePasswordHandler}
            onChange={passwordChangeHandler}
            type="password"
            value={enteredPassword}
          />
        </div>
        <div className={classes.actions}>
          <Button className={classes.btn} disabled={!formIsValid} type="submit">
            Login
          </Button>
        </div>
      </form>
    </Card>
  );
};

export default Login;
