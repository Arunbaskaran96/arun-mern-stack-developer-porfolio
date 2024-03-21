import React from "react";
import classes from "./mobilesidebar.module.css";
import { Link } from "react-router-dom";

export default function Mobilesidebar({ setIsMobile }) {
  return (
    <div>
      <ul className={classes.ul}>
        <Link
          to="/navbar/about"
          onClick={() => setIsMobile(false)}
          className={classes.li}
        >
          About
        </Link>
        <Link
          to="/navbar/skills"
          onClick={() => setIsMobile(false)}
          className={classes.li}
        >
          Skill
        </Link>
        <Link
          to="/navbar/projects"
          onClick={() => setIsMobile(false)}
          className={classes.li}
        >
          Project
        </Link>
        <Link
          to="/navbar/experiences"
          onClick={() => setIsMobile(false)}
          className={classes.li}
        >
          Experience
        </Link>
        <Link
          to="/navbar/contact"
          onClick={() => setIsMobile(false)}
          className={classes.li}
        >
          Contact
        </Link>
        <li className={classes.li}></li>
        <li className={classes.li}></li>
        <li className={classes.li}></li>
        <li className={classes.li}></li>
      </ul>
    </div>
  );
}
