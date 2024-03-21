import { Link } from "react-router-dom";
import classes from "./landpage.module.css";
import mern from "../../assests/MERN-logo.png";
import dropdown from "../../assests/arrowdown.svg";

export default function Landpage() {
  return (
    <>
      <div className={classes.container}>
        <div className={classes.left}>
          <h1 className={classes.h1}>Welcome</h1>
          <h5 className={classes.h5}>I'm</h5>
          <h2 className={classes.h2}>Arun .B</h2>
          <h4 className={classes.h4}>Full Stack Developer</h4>
        </div>
        <div className={classes.right}>
          <img className={classes.image} src={mern} alt="rightimage" />
        </div>
      </div>
      <div className={classes.bottomContainer}>
        <Link to="/navbar/about">
          <img className={classes.dropdown} src={dropdown} alt="dropddown" />
        </Link>
      </div>
    </>
  );
}
