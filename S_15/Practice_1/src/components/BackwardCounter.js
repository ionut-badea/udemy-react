import useCounter from "../hooks/use-counter";

import Card from "./Card";

const BackwardCounter = () => {
  const counterr = useCounter(false);
  return <Card>{counterr}</Card>;
};

export default BackwardCounter;
