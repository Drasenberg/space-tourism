import React from "react";
import DestinationNav from "./DestinationNav";
import imageMars from "../../assets/destination/image-mars.png";
import classes from "../../styles/Destination/Destination.module.scss";

const Mars = () => {
  return (
    <div className={classes.container}>
      <h5>
        <span>01</span>Pick your destination
      </h5>
      <div className={classes.destination}>
        <div className={classes.left}><img src={imageMars} alt="Moon" /></div>
        <div className={classes.right}>
          <DestinationNav />
          <h1>Mars</h1>
          <p className={classes.description}>
            Don’t forget to pack your hiking boots. You’ll need them to tackle
            Olympus Mons, the tallest planetary mountain in our solar system. It’s
            two and a half times the size of Everest!
          </p>
          <div className={classes.line}></div>
          <div className={classes.additionalInfo}>
            <div className={classes.distance}>
              <h5>Avg. Distance</h5>
              <p>225 mil. km</p>
            </div>
            <div className={classes.travelTime}>
              <h5>Est. Travel Time</h5>
              <p>9 months</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mars;
