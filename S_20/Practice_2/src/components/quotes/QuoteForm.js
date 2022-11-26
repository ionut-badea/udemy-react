import { useRef, useState } from "react";
import { Prompt } from "react-router-dom";

import Card from "../UI/Card";
import LoadingSpinner from "../UI/LoadingSpinner";
import classes from "./QuoteForm.module.css";

const QuoteForm = props => {
  const authorInputRef = useRef();
  const textInputRef = useRef();

  function submitFormHandler(event) {
    event.preventDefault();

    const enteredAuthor = authorInputRef.current.value;
    const enteredText = textInputRef.current.value;

    // optional: Could validate here

    props.onAddQuote({ author: enteredAuthor, text: enteredText });
  }

  const [isFocused, setIsFocused] = useState(false);

  const onFormFocus = () => {
    setIsFocused(true);
  };

  const onClickAddQuote = () => {
    setIsFocused(false);
  };

  return (
    <>
      <Prompt message="Are you sure?" when={isFocused} />
      <Card>
        <form
          className={classes.form}
          onFocus={onFormFocus}
          onSubmit={submitFormHandler}
        >
          {props.isLoading && (
            <div className={classes.loading}>
              <LoadingSpinner />
            </div>
          )}

          <div className={classes.control}>
            <label htmlFor="author">Author</label>
            <input id="author" ref={authorInputRef} type="text" />
          </div>
          <div className={classes.control}>
            <label htmlFor="text">Text</label>
            <textarea id="text" ref={textInputRef} rows="5"></textarea>
          </div>
          <div className={classes.actions}>
            <button className="btn" onClick={onClickAddQuote}>
              Add Quote
            </button>
          </div>
        </form>
      </Card>
    </>
  );
};

export default QuoteForm;
