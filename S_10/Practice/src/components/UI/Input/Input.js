import classes from "./Input.module.css";

const Input = props => {
  const invalid = props.isValid === false && classes.invalid;

  return (
    <div className={`${classes.control} ${invalid}`}>
      <label htmlFor="email">{props.label}</label>
      <input
        id={props.id}
        onBlur={props.onBlur}
        onChange={props.onChange}
        type={props.type}
        value={props.value}
      />
    </div>
  );
};

export default Input;
