import QuoteList from "../../components/quotes/QuoteList";

const DUMMY = [
  { author: "Jack", id: "q1", text: "Something new" },
  { author: "D.", id: "q2", text: "Something new from otherside" },
];

const Quotes = () => {
  return <QuoteList quotes={DUMMY} />;
};

export default Quotes;
