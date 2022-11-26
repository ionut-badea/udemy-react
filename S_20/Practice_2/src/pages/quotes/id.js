import { Link, Route, useParams, useRouteMatch } from "react-router-dom";
import Comments from "../../components/comments/Comments";
import HighlightedQuote from "../../components/quotes/HighlightedQuote";

const DUMMY = [
  { author: "Jack", id: "q1", text: "Something new" },
  { author: "D.", id: "q2", text: "Something new from otherside" },
];

const Quote = () => {
  const params = useParams();
  const match = useRouteMatch();

  const quote = DUMMY.find(quote => quote.id === params.id);

  if (!quote) return <p>No Quote Found</p>;

  return (
    <>
      <HighlightedQuote author={quote.author} text={quote.text} />
      <div className="centered">
        <Link className="btn--flat" to={`${match.url}/comments`}>
          Load Comments
        </Link>
      </div>
      <Route path={`${match.path}/comments`}>
        <Comments />
      </Route>
    </>
  );
};

export default Quote;
