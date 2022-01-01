import React from "react";
import CrewNavigation from "./CrewNavigation";
import classes from "../../styles/Crew/Crew.module.scss";

const Pilot = () => {
  return (
    <div className={classes.container}>
      <h5>
        <span>02</span> Meet your crew
      </h5>
      <div className={`${classes.imageContainer} ${classes.pilot}`}></div>
      <CrewNavigation />
      <div className={classes.about}>
        <h3>Pilot</h3>
        <h1>Victor Glover</h1>
        <p>
          Pilot on the first operational flight of the SpaceX Crew Dragon to the
          International Space Station. Glover is a commander in the U.S. Navy
          where he pilots an F/A-18.He was a crew member of Expedition 64, and
          served as a station systems flight engineer.
        </p>
      </div>
    </div>
  );
};

export default Pilot;
