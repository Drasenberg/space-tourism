import React from "react";
import TechNav from "./TechNav";

import classes from "../../styles/Technology/Technology.module.scss";

const Vehicle = () => {
  return (
    <div className={classes.techContainer}>
      <h5>
        <span>03</span>Space launch 101
      </h5>
      <div className={classes.vehicleImage}></div>
      <TechNav />
      <div className={classes.about}>
        <h3>The terminology...</h3>
        <h1>Launch vehicle</h1>
        <p>
          A launch vehicle or carrier rocket is a rocket-propelled vehicle used
          to carry a payload from Earth's surface to space, usually to Earth
          orbit or beyond. Our WEB-X carrier rocket is the most powerful in
          operation. Standing 150 metres tall, it's quite an awe-inspiring sight
          on the launch pad!
        </p>
      </div>
    </div>
  );
};

export default Vehicle;
