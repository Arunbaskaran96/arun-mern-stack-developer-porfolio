import { useEffect, useState } from "react";
import classes from "./contact.module.css";
import Loading from "../../components/loading/Loading";
import email from "../../assests/email.svg";
import mobile from "../../assests/mobile.svg";
import github from "../../assests/github.svg";
import linkedin from "../../assests/linkedin.svg";

export default function Contact() {
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
          <h3 className={classes.heading}>Contact</h3>
          <div className={classes.interestContainer}>
            <p>
              I am interested in freelance opportunities especially ambitious or
              large projects. However, if you have other request or question,
              don't hesitate to contact me using below options.
            </p>
          </div>
          <div className={classes.bottomContainer}>
            <div className={classes.left}>
              <p className={classes.leftOne}>Let Connect</p>
              <h5 className={classes.leftSecond}>Digitally</h5>
            </div>
            <div className={classes.right}>
              <div className={classes.iconContainer}>
                <a
                  href="mailto:arundhi04101996@gmail.com"
                  className={classes.text}
                  target="blank"
                >
                  <img className={classes.logo} src={email} alt="logo" />
                  Email
                </a>
              </div>
              <div className={classes.iconContainer}>
                <a
                  href="tel:+917539913570"
                  className={classes.text}
                  target="blank"
                >
                  <img className={classes.logo} src={mobile} alt="logo" />
                  Mobile
                </a>
              </div>
              <div className={classes.iconContainer}>
                <a
                  href="https://github.com/Arunbaskaran96"
                  className={classes.text}
                  target="blank"
                >
                  <img className={classes.logo} src={github} alt="logo" />
                  Github
                </a>
              </div>
              <div className={classes.iconContainer}>
                <a
                  href="https://www.linkedin.com/in/arun-b-841112271/"
                  className={classes.text}
                  target="blank"
                >
                  <img className={classes.logo} src={linkedin} alt="logo" />
                  LinkedIn
                </a>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
