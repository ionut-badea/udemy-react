import React, { useContext } from "react";
import { AuthContext } from "../../context/auth";

import classes from "./Navigation.module.css";

const Navigation = () => {
  // ? This is the hook way
  const ctx = useContext(AuthContext);

  return (
    // ? This is the Consumer way
    // <AuthContext.Consumer>
    //   {ctx => {
    //     return (
    <nav className={classes.nav}>
      <ul>
        {ctx.isLoggedIn && (
          <li>
            <a href="/">Users</a>
          </li>
        )}
        {ctx.isLoggedIn && (
          <li>
            <a href="/">Admin</a>
          </li>
        )}
        {ctx.isLoggedIn && (
          <li>
            <button onClick={ctx.onLogout}>Logout</button>
          </li>
        )}
      </ul>
    </nav>
  );
  // ? This is the Consumer way
  //     }}
  //   </AuthContext.Consumer>
  // );
};

export default Navigation;
