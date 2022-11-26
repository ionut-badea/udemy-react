import { useHistory } from "react-router-dom";
import QuoteForm from "../../components/quotes/QuoteForm";

const AddQuote = () => {
  const history = useHistory();
  const onAdd = ({ author, text }) => {
    console.log({ author, text });
    history.push("/quotes");
  };
  return <QuoteForm onAddQuote={onAdd} />;
};

export default AddQuote;
