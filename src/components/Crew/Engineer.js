import React from "react";
import CrewNavigation from "./CrewNavigation";
import classes from "../../styles/Crew/Crew.module.scss";

const Engineer = () => {
  return (
    <div className={classes.container}>
      <h5>
        <span>02</span> Meet your crew
      </h5>
      <div className={`${classes.imageContainer} ${classes.engineer}`}></div>
      <CrewNavigation />
      <div className={classes.about}>
        <h3>Flight Engineer</h3>
        <h1>Anousheh Ansari</h1>
        <p>
          Anousheh Ansari is an Iranian American engineer and co-founder of
          Prodea Systems. Ansari was the fourth self-funded space tourist, the
          first self-funded woman to fly to the ISS, and the first Iranian in
          space.
        </p>
      </div>
    </div>
  );
};

export default Engineer;
