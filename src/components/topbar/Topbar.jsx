import { Link } from "react-router-dom";
import classes from "./topbar.module.css";
import Mobilesidebar from "../mobilesidebar/MobileSidebar";
import { useState } from "react";

export default function Topbar() {
  const [isMobile, setIsMobile] = useState(false);
  return (
    <div className={classes.topbar}>
      <div className={classes.container}>
        <div className={classes.left}>
          <div className={classes.name}>Arun</div>
        </div>
        <div className={classes.right}>
          <ul className={classes.items}>
            <Link to="/navbar/about" className={classes.item}>
              About
            </Link>
            <Link to="/navbar/skills" className={classes.item}>
              Skills
            </Link>
            <Link to="/navbar/projects" className={classes.item}>
              Projects
            </Link>
            <Link to="/navbar/experiences" className={classes.item}>
              Experiences
            </Link>
            <Link to="/navbar/contact" className={classes.item}>
              Contact
            </Link>
          </ul>
        </div>
        <div className={classes.menuIconContainer}>
          {!isMobile ? (
            <div onClick={() => setIsMobile(!isMobile)}>➕</div>
          ) : (
            <div onClick={() => setIsMobile(!isMobile)}>✖</div>
          )}
        </div>
      </div>
      {isMobile && (
        <div className={classes.mobilesidebar}>
          <Mobilesidebar setIsMobile={setIsMobile} />
        </div>
      )}
    </div>
  );
}
