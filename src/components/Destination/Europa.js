import React from "react";
import DestinationNav from "./DestinationNav";
import imageEuropa from "../../assets/destination/image-europa.png";
import classes from "../../styles/Destination/Destination.module.scss";

const Europa = () => {
  return (
    <div className={classes.container}>
      <h5>
        <span>01</span>Pick your destination
      </h5>
      <div className={classes.destination}>
        <div className={classes.left}>
          <img src={imageEuropa} alt="Moon" />
        </div>
        <div className={classes.right}>
          <DestinationNav />
          <h1>Europa</h1>
          <p className={classes.description}>
            The smallest of the four Galilean moons orbiting Jupiter, Europa is
            a winter lover’s dream. With an icy surface, it’s perfect for a bit
            of ice skating, curling, hockey, or simple relaxation in your snug
            wintery cabin.
          </p>
          <div className={classes.line}></div>
          <div className={classes.additionalInfo}>
            <div className={classes.distance}>
              <h5>Avg. Distance</h5>
              <p>628 mil. km</p>
            </div>
            <div className={classes.travelTime}>
              <h5>Est. Travel Time</h5>
              <p>3 years</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Europa;
