import Card from "../UI/Card";
import classes from "./AvailableMeals.module.css";
import MealItem from "./MealItem/MealItem";

const DUMMY_MEALS = [
  {
    description: "Finest fish and veggies",
    id: "m1",
    name: "Sushi",
    price: 22.99,
  },
  {
    description: "A german specialty!",
    id: "m2",
    name: "Schnitzel",
    price: 16.5,
  },
  {
    description: "American, raw, meaty",
    id: "m3",
    name: "Barbecue Burger",
    price: 12.99,
  },
  {
    description: "Healthy...and green...",
    id: "m4",
    name: "Green Bowl",
    price: 18.99,
  },
];

const AvailableMeals = () => {
  const meals = DUMMY_MEALS.map(meal => (
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
      <Card>
        <ul>{meals}</ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;
