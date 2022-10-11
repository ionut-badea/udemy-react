import { useState } from "react";
import ErrorModal from "./components/UI/ErrorModal";
import AddUser from "./components/User/AddUser";
import UserList from "./components/User/UserList";

const App = () => {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState();

  const addUser = user => setUsers(prev => [user, ...prev]);
  const logError = error => {
    setError({ message: error.message, title: error.title });
  };
  const removeError = () => setError();

  return (
    <>
      <AddUser addUser={addUser} logError={logError} />
      <UserList users={users} />
      {error && (
        <ErrorModal
          message={error.message}
          removeError={removeError}
          title={error.title}
        />
      )}
    </>
  );
};

export default App;
