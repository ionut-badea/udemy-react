import React, { useContext, useEffect, useReducer, useState } from "react";
import { AuthContext } from "../../context/auth";
import Button from "../UI/Button/Button";
import Card from "../UI/Card/Card";
import Input from "../UI/Input/Input";
import classes from "./Login.module.css";

const emailReducer = (state, action) => {
  switch (action.type) {
    case "EMAIL_INPUT":
      return { isValid: action.value.includes("@"), value: action.value };
    case "EMAIL_INPUT_BLUR":
      return { isValid: state.value.includes("@"), value: state.value };
    default:
      return { isValid: false, value: "" };
  }
};

const passwordReducer = (state, action) => {
  switch (action.type) {
    case "PASSWORD_INPUT":
      return { isValid: action.value.trim().length > 6, value: action.value };
    case "PASSWORD_INPUT_BLUR":
      return { isValid: state.value.trim().length > 6, value: state.value };
    default:
      return { isValid: false, value: "" };
  }
};

const Login = () => {
  const ctx = useContext(AuthContext);

  // const [enteredEmail, setEnteredEmail] = useState("");
  // const [emailIsValid, setEmailIsValid] = useState();
  // const [enteredPassword, setEnteredPassword] = useState("");
  // const [passwordIsValid, setPasswordIsValid] = useState();
  const [formIsValid, setFormIsValid] = useState(false);

  const [emailState, emailDispatch] = useReducer(emailReducer, {
    isValid: undefined,
    value: "",
  });

  const [passwordState, passwordDispatch] = useReducer(passwordReducer, {
    isValid: undefined,
    value: "",
  });

  const { isValid: emailIsValid } = emailState;
  const { isValid: passwordIsValid } = passwordState;

  // ? useEffect by default at mount and every time dependencies are changing
  useEffect(() => {
    const interval = setTimeout(() => {
      console.log("check");
      setFormIsValid(emailIsValid && passwordIsValid);
    }, 1500);

    // ? this function (clean up function) runs:
    // ? - before every time useEffect is activated, starting with second run, so is not running when componet is mounted
    // ? - at unmount time
    return () => {
      console.log("clear");
      clearInterval(interval);
    };
  }, [emailIsValid, passwordIsValid]);

  const emailChangeHandler = event => {
    // setEnteredEmail(event.target.value);
    emailDispatch({ type: "EMAIL_INPUT", value: event.target.value });
    // setFormIsValid(event.target.value.includes("@") && passwordState.isValid);
  };

  const passwordChangeHandler = event => {
    // setEnteredPassword(event.target.value);
    passwordDispatch({ type: "PASSWORD_INPUT", value: event.target.value });
    // setFormIsValid(emailState.isValid && event.target.value.length > 6);
  };

  const validateEmailHandler = () => {
    // setEmailIsValid(enteredEmail.includes("@"));
    emailDispatch({ type: "EMAIL_INPUT_BLUR" });
  };

  const validatePasswordHandler = () => {
    // setPasswordIsValid(enteredPassword.trim().length > 6);
    passwordDispatch({ type: "PASSWORD_INPUT_BLUR" });
  };

  const submitHandler = event => {
    event.preventDefault();
    ctx.onLogin(emailState.value, passwordState.value);
  };

  return (
    <Card className={classes.login}>
      <form onSubmit={submitHandler}>
        <Input
          id="email"
          isValid={emailIsValid}
          label="Email"
          onChange={emailChangeHandler}
          onValidation={validateEmailHandler}
          type="email"
          value={emailState.value}
        />
        <Input
          id="password"
          isValid={passwordIsValid}
          label="Password"
          onChange={passwordChangeHandler}
          onValidation={validatePasswordHandler}
          type="password"
          value={passwordState.value}
        />
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
