import React from "react";

import LogoImage from "../../assets/images/burger-logo.png";
import classes from "./Logo.css";

const Logo = props => {
  return (
    <div className={classes.Logo} style={{ height: props.height }}>
      <img src={LogoImage} alt="MyBurger"></img>
    </div>
  );
};

export default Logo;
