import classes from "./experience.module.css";

export default function Experience() {
  return (
    <div className={classes.container}>
      <h3 className={classes.heading}>Work Experiences</h3>
      <div className={classes.experienceContainer}>
        <div className={classes.experience}>
          <div>
            <p className={classes.key}>
              Designation :<span>Front End Developer Intern</span>
            </p>
            <p className={classes.key}>
              Company : <span>Kredx</span>
            </p>
            <p className={classes.key}>
              Location : <span>Bangalore</span>
            </p>
            <p className={classes.key}>
              Duration :<span> Sep-2023 to Dec-2023</span>
            </p>
          </div>
        </div>
        <div className={classes.experience}>
          <div>
            <p className={classes.key}>
              Designation :<span>Help Desk Engineer</span>
            </p>
            <p className={classes.key}>
              Company : <span>Crown Solutions India Private Limited</span>
            </p>
            <p className={classes.key}>
              Location : <span>Chennai</span>
            </p>
            <p className={classes.key}>
              Duration :<span>september-2021 to August-2023</span>
            </p>
          </div>
        </div>
        <div className={classes.experience}>
          <div>
            <p className={classes.key}>
              Designation :<span>CNC Operator</span>
            </p>
            <p className={classes.key}>
              Company : <span>Steel Strips Wheels Private Limited</span>
            </p>
            <p className={classes.key}>
              Location : <span>Chennai</span>
            </p>
            <p className={classes.key}>
              Duration :<span>8 Months</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
