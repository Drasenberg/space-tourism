import React from "react";
import CrewNavigation from "./CrewNavigation";
import classes from "../../styles/Crew/Crew.module.scss";

const Commander = () => {
  return (
    <div className={classes.container}>
      <h5>
        <span>02</span> Meet your crew
      </h5>
      <div className={`${classes.imageContainer} ${classes.commander}`}></div>
      <CrewNavigation />
      <div className={classes.about}>
        <h3>Commander</h3>
        <h1>Douglas Hurley</h1>
        <p>
          Douglas Gerald Hurley is an American engineer, former Marine Corps
          pilot and former NASA astronaut. He launched into space for the third
          time as commander of Crew Dragon Demo-2.
        </p>
      </div>
    </div>
  );
};

export default Commander;
