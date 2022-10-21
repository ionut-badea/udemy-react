import React, { useEffect, useState } from "react";

import NewTask from "./components/NewTask/NewTask";
import Tasks from "./components/Tasks/Tasks";
import useFetch from "./hooks/use-fetch";

const URL =
  "https://powerful-tree-300811-default-rtdb.europe-west1.firebasedatabase.app/tasks.json";

function App() {
  const [tasks, setTasks] = useState([]);

  const { error, isLoading, sendRequest: fetchTasks } = useFetch();

  useEffect(() => {
    const transformTasks = tasks => {
      const loadedTasks = [];
      for (const taskKey in tasks) {
        loadedTasks.push({ id: taskKey, text: tasks[taskKey].text });
      }
      setTasks(loadedTasks);
    };

    fetchTasks({ url: URL }, transformTasks);
  }, [fetchTasks]);

  const taskAddHandler = task => {
    setTasks(prevTasks => prevTasks.concat(task));
  };

  return (
    <React.Fragment>
      <NewTask onAddTask={taskAddHandler} />
      <Tasks
        error={error}
        items={tasks}
        loading={isLoading}
        onFetch={fetchTasks}
      />
    </React.Fragment>
  );
}

export default App;
