import React from "react";
import CrewNavigation from "./CrewNavigation";
import classes from "../../styles/Crew/Crew.module.scss";

const Specialist = () => {
  return (
    <div className={classes.container}>
      <h5>
        <span>02</span> Meet your crew
      </h5>
      <div className={`${classes.imageContainer} ${classes.specialist}`}></div>
      <CrewNavigation />
      <div className={classes.about}>
        <h3>Mission Specialist</h3>
        <h1>Mark Shuttleworth</h1>
        <p>
          Mark Richard Shuttleworth is the founder and CEO of Canonical, the
          company behind the Linux-based Ubuntu operating system. Shuttleworth
          became the first South African to travel to space as a space tourist.
        </p>
      </div>
    </div>
  );
};

export default Specialist;
