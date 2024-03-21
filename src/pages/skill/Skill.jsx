import { useEffect, useState } from "react";
import classes from "./skill.module.css";
import Loading from "../../components/loading/Loading";
import html from "../../assests/html.svg";
import css from "../../assests/css.svg";
import js from "../../assests/js.svg";
import react from "../../assests/react.svg";
import node from "../../assests/nodejs.svg";
import mongodb from "../../assests/mongodb.svg";
import bootstrap from "../../assests/bootstrap.svg";
import express from "../../assests/express.svg";
import babel from "../../assests/babel.svg";
import jest from "../../assests/jest.png";
import vs from "../../assests/vscode.svg";
import typescript from "../../assests/typescript.svg";
import webpack from "../../assests/webpack.svg";

export default function Skill() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 500);
  }, []);
  return (
    <div className={classes.container}>
      {loading ? (
        <div className={classes.loader}>
          <Loading />
        </div>
      ) : (
        <>
          <h3 className={classes.heading}>Skills</h3>
          <div className={classes.top}>
            <div className={classes.skillTop}>
              <h6 className={classes.skill}>Web Design</h6>
              <p className={classes.des}>
                I love designs and it's the first step before creating any
                website as I can give layout to my imagination.
              </p>
            </div>
            <div className={classes.skillTop}>
              <h6 className={classes.skill}>Web Development</h6>
              <p className={classes.des}>
                I am a Full Stack Web Developer (MERN) and have quite some
                experience in it as well.
              </p>
            </div>
            <div className={classes.skillTop}>
              <h6 className={classes.skill}>Problem Solving</h6>
              <p className={classes.des}>
                I love solving problems whether it's programming problems or
                real life problems.
              </p>
            </div>
          </div>
          <div>
            <p className={classes.tech}>TECH I AM FAMILIAR WITH</p>
          </div>
          <div className={classes.techContainer}>
            <div className={classes.first}>
              <div className={classes.skillset}>
                <img style={{ height: "30px" }} src={html} alt="icon" />
                <p className={classes.skillname}>Html</p>
              </div>
              <div className={classes.skillset}>
                <img style={{ height: "30px" }} src={css} alt="icon" />
                <p className={classes.skillname}>Css</p>
              </div>
              <div className={classes.skillset}>
                <img style={{ height: "30px" }} src={js} alt="icon" />
                <p className={classes.skillname}>JavaScript</p>
              </div>
              <div className={classes.skillset}>
                <img style={{ height: "30px" }} src={react} alt="icon" />
                <p className={classes.skillname}>React</p>
              </div>
            </div>
            <div className={classes.first}>
              <div className={classes.skillset}>
                <img style={{ height: "30px" }} src={mongodb} alt="icon" />
                <p className={classes.skillname}>MongoDB</p>
              </div>

              <div className={classes.skillset}>
                <img style={{ height: "30px" }} src={express} alt="icon" />
                <p className={classes.skillname}>Express</p>
              </div>
              <div className={classes.skillset}>
                <img style={{ height: "30px" }} src={node} alt="icon" />
                <p className={classes.skillname}>Node JS</p>
              </div>
              <div className={classes.skillset}>
                <img style={{ height: "30px" }} src={mongodb} alt="icon" />
                <p className={classes.skillname}>Mongoose</p>
              </div>
              <div className={classes.skillset}>
                <img style={{ height: "30px" }} src={babel} alt="icon" />
                <p className={classes.skillname}>Babel</p>
              </div>
            </div>
            <div className={classes.first}>
              <div className={classes.skillset}>
                <img style={{ height: "30px" }} src={jest} alt="icon" />
                <p className={classes.skillname}>Jest</p>
              </div>
              <div className={classes.skillset}>
                <img style={{ height: "30px" }} src={vs} alt="icon" />
                <p className={classes.skillname}>Vs Code</p>
              </div>
              <div className={classes.skillset}>
                <img style={{ height: "30px" }} src={bootstrap} alt="icon" />
                <p className={classes.skillname}>BootStrap</p>
              </div>
              <div className={classes.skillset}>
                <img style={{ height: "30px" }} src={typescript} alt="icon" />
                <p className={classes.skillname}>Typescript</p>
              </div>
              <div className={classes.skillset}>
                <img style={{ height: "30px" }} src={webpack} alt="icon" />
                <p className={classes.skillname}>Webpack</p>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
