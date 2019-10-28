import React from "react";

import Burger from "../../Burger/Burger";
import Button from "../../UI/Button/Button";
import classes from "./CheckoutSummary.css";

const CheckoutSummary = props => {
  return (
    <div className={classes.CheckoutSummary}>
      <h2 style={{ fontWeight: "400" }}>We hope it taste well!</h2>
      <div style={{ width: "100%", margin: "auto" }}>
        <Burger ingredients={props.ingredients} />
      </div>
      <p className={classes.Small}>
        Would you like to continue with the order?
      </p>
      <Button clicked={props.checkoutCancelled} btnType="Danger">
        CANCEL
      </Button>
      <Button clicked={props.checkoutContinued} btnType="Success">
        CONTINUE
      </Button>
    </div>
  );
};

export default CheckoutSummary;
