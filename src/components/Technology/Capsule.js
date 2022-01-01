import React from "react";
import TechNav from "./TechNav";

import classes from "../../styles/Technology/Technology.module.scss";

const Capsule = () => {
  return (
    <div className={classes.techContainer}>
      <h5>
        <span>03</span>Space launch 101
      </h5>
      <div className={classes.capsuleImage}></div>
      <TechNav />
      <div className={classes.about}>
        <h3>The terminology...</h3>
        <h1>Space capsule</h1>
        <p>
          A space capsule is an often-crewed spacecraft that uses a blunt-body
          reentry capsule to reenter the Earth's atmosphere without wings. Our
          capsule is where you'll spend your time during the flight. It includes a
          space gym, cinema, and plenty of other activities to keep you
          entertained.
        </p>
      </div>
    </div>
  );
};

export default Capsule;
