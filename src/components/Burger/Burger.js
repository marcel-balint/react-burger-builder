import React from "react";

import classes from "./Burger.css";
import BurgerIngredient from "./BurgerIngredient/BurgerIngredient";

const Burger = props => {
  console.log(props.ingredients);
  const transformedIngredients = Object.keys(props.ingredients).map(ingKey => {
    return [...Array(props.ingredients[ingKey])].map((_, i) => {
      return <BurgerIngredient key={ingKey + i} type={ingKey} />;
    });
  });
  console.log(transformedIngredients);
  return (
    <div className={classes.Burger}>
      <BurgerIngredient type="bread-top" />
      {transformedIngredients}
      <BurgerIngredient type="bread-bottom" />
    </div>
  );
};

export default Burger;
