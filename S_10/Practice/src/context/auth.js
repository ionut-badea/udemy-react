import React, { useEffect, useState } from "react";

export const AuthContext = React.createContext({
  isLoggedIn: false,
  onLogin: () => {},
  onLogout: () => {},
});

const AuthContextProvider = props => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // ? useEffect without dependencies runs only one time, at mount
  useEffect(() => {
    const isAuth = localStorage.getItem("isAuth");
    if (isAuth === "1") setIsLoggedIn(true);
    console.log("isAuth");
  }, []);

  const onLogin = (email, password) => {
    localStorage.setItem("isAuth", "1");
    setIsLoggedIn(true);
  };

  const onLogout = () => {
    localStorage.setItem("isAuth", "0");
    setIsLoggedIn(false);
  };

  return (
    <AuthContext.Provider value={{ isLoggedIn, onLogin, onLogout }}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
