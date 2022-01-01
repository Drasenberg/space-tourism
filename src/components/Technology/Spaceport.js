import React from "react";
import TechNav from "./TechNav";

import classes from "../../styles/Technology/Technology.module.scss";

const Spaceport = () => {
  return (
    <div className={classes.techContainer}>
      <h5>
        <span>03</span>Space launch 101
      </h5>
      <div className={classes.spaceportImage}></div>
      <TechNav />
      <div className={classes.about}>
        <h3>The terminology...</h3>
        <h1>Spaceport</h1>
        <p>
          A spaceport or cosmodrome is a site for launching (or receiving)
          spacecraft, by analogy to the seaport for ships or airport for aircraft.
          Based in the famous Cape Canaveral, our spaceport is ideally situated to
          take advantage of the Earth’s rotation for launch.
        </p>
      </div>
    </div>
  );
};

export default Spaceport;
