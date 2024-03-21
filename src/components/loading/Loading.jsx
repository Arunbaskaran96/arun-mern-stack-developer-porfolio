import React from "react";
import classes from "./loading.module.css";

function Loading() {
  return (
    <div>
      <div className={classes.loader}>
        <span className={classes["loader--dot"]} />
        <span className={classes["loader--dot"]} />
        <span className={classes["loader--dot"]} />
      </div>
    </div>
  );
}

export default Loading;
