import { useEffect, useState } from "react";
import useFetch from "../../hooks/use-fetch";
import Card from "../UI/Card";
import classes from "./AvailableMeals.module.css";
import MealItem from "./MealItem/MealItem";

const AvailableMeals = () => {
  const [meals, setMeals] = useState([]);
  const { error, isLoading, sendRequest } = useFetch();

  useEffect(() => {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
      method: "GET",
      url: "https://powerful-tree-300811-default-rtdb.europe-west1.firebasedatabase.app/meals.json",
    };
    sendRequest(config, setMeals);
  }, [sendRequest]);

  const mealsList =
    !isLoading &&
    meals.map(meal => (
      <MealItem
        description={meal.description}
        id={meal.id}
        key={meal.id}
        name={meal.name}
        price={meal.price}
      />
    ));
  return (
    <section className={classes.meals}>
      <Card>{error ? <p>Something went wrong</p> : <ul>{mealsList}</ul>}</Card>
    </section>
  );
};

export default AvailableMeals;
