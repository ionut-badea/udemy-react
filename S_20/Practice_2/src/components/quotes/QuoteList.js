import { Fragment } from "react";
import { useHistory, useLocation } from "react-router-dom";
import QuoteItem from "./QuoteItem";
import classes from "./QuoteList.module.css";

const QuoteList = props => {
  const history = useHistory();
  const location = useLocation();

  const queryParams = new URLSearchParams(location.search);
  const isAscending = queryParams.get("sort") === "asc";

  const onSort = () => {
    history.push({
      pathname: location.pathname,
      search: `?sort=${isAscending ? "desc" : "asc"}`,
    });
  };

  return (
    <Fragment>
      <div className={classes.sorting}>
        <button onClick={onSort}>
          Sorting {isAscending ? "Descending" : "Ascending"}
        </button>
      </div>
      <ul className={classes.list}>
        {props.quotes
          .sort((a, b) => {
            return isAscending ? a.id > b.id : b.id > a.id;
          })
          .map(quote => (
            <QuoteItem
              author={quote.author}
              id={quote.id}
              key={quote.id}
              text={quote.text}
            />
          ))}
      </ul>
    </Fragment>
  );
};

export default QuoteList;
