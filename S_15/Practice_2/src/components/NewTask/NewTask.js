import useFetch from "../../hooks/use-fetch";
import Section from "../UI/Section";
import TaskForm from "./TaskForm";

const URL =
  "https://powerful-tree-300811-default-rtdb.europe-west1.firebasedatabase.app/tasks.json";

const NewTask = props => {
  const { error, isLoading, sendRequest: sendTask } = useFetch();

  const createTask = (taskText, taskData) => {
    const generatedId = taskData.name;
    const createdTask = { id: generatedId, text: taskText };
    props.onAddTask(createdTask);
  };

  const enterTaskHandler = async taskText => {
    sendTask(
      { body: { text: taskText }, method: "POST", url: URL },
      createTask.bind(null, taskText),
    );
  };

  return (
    <Section>
      <TaskForm loading={isLoading} onEnterTask={enterTaskHandler} />
      {error && <p>{error}</p>}
    </Section>
  );
};

export default NewTask;
