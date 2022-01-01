import React from "react";
import DestinationNav from "./DestinationNav";
import imageTitan from "../../assets/destination/image-titan.png";
import classes from "../../styles/Destination/Destination.module.scss";

const Titan = () => {
  return (
    <div className={classes.container}>
      <h5>
        <span>01</span>Pick your destination
      </h5>
      <div className={classes.destination}>
        <div>classes.left<img src={imageTitan} alt="Moon" /></div>
        <div className={classes.right}>
          <DestinationNav />
          <h1>Titan</h1>
          <p className={classes.description}>
            The only moon known to have a dense atmosphere other than Earth, Titan
            is a home away from home (just a few hundred degrees colder!). As a
            bonus, you get striking views of the Rings of Saturn.
          </p>
          <div className={classes.line}></div>
          <div className={classes.additionalInfo}>
            <div className={classes.distance}>
              <h5>Avg. Distance</h5>
              <p>1.6 bil. km</p>
            </div>
            <div className={classes.travelTime}>
              <h5>Est. Travel Time</h5>
              <p>7 years</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Titan;
