import classes from "./CssModules.module.scss";
import React from "react";

export const CssModules = () => {
  return (
    <div className={classes.container}>
      <p>-CSS Modules-</p>
      <button>beautiful!</button>
    </div>
  );
};
