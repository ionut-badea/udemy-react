import ReactDOM from "react-dom";
import Button from "./Button";
import Card from "./Card";
import classes from "./ErrorModal.module.css";

const Backdrop = props => {
  return <div className={classes.backdrop} onClick={props.removeError} />;
};

const Modal = props => {
  return (
    <Card className={classes.modal}>
      <header className={classes.header}>
        <h2>{props.title}</h2>
      </header>
      <div className={classes.content}>
        <p>{props.message}</p>
      </div>
      <footer className={classes.actions}>
        <Button onClick={props.removeError}>Close</Button>
      </footer>
    </Card>
  );
};

const ErrorModal = props => {
  return (
    <>
      {ReactDOM.createPortal(
        <Backdrop removeError={props.removeError} />,
        document.getElementById("root-backdrop"),
      )}
      {ReactDOM.createPortal(
        <Modal
          message={props.message}
          removeError={props.removeError}
          title={props.title}
        />,
        document.getElementById("root-modal"),
      )}
    </>
  );
};

export default ErrorModal;
