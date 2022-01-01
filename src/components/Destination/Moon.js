import React from "react";
import DestinationNav from "./DestinationNav";
import imageMoon from "../../assets/destination/image-moon.png";
import classes from "../../styles/Destination/Destination.module.scss";

const Moon = () => {
  return (
    <div className={classes.container}>
      <h5>
        <span>01</span>Pick your destination
      </h5>
      <div className={classes.destination}>
        <div className={classes.left}><img src={imageMoon} alt="Moon" /></div>
        <div className={classes.right}>
          <DestinationNav />
          <h1>Moon</h1>
          <p className={classes.description}>
            See our planet as you’ve never seen it before. A perfect relaxing trip
            away to help regain perspective and come back refreshed. While you’re
            there, take in some history by visiting the Luna 2 and Apollo 11
            landing sites.
          </p>
          <div className={classes.line}></div>
          <div className={classes.additionalInfo}>
            <div className={classes.distance}>
              <h5>Avg. Distance</h5>
              <p>384,400 KM</p>
            </div>
            <div className={classes.travelTime}>
              <h5>Est. Travel Time</h5>
              <p>3 Days</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Moon;
