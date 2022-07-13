import React from "react";
import classes from "./CardBackround.module.css";

const CardBackground = (props) => {
  return (
    <div className={classes.mainContainer}>
      <div className={classes.circle1}></div>
      <div className={classes.circle2}></div>
      <div className={classes.glass}>
        <div className={classes.position}>{props.children}</div>
      </div>
    </div>
  );
};

export default CardBackground;
