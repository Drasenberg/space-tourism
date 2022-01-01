import React from "react";
import { Route, Routes } from "react-router-dom";
import Navigation from "../components/Navigation";
import Capsule from "../components/Technology/Capsule";
import Spaceport from "../components/Technology/Spaceport";
import Vehicle from "../components/Technology/Vehicle";

import classes from "../styles/PageStyles/TechnologyPage.module.scss";

const TechnologyPage = () => {
  return (
    <div className={classes.container}>
      <Navigation />
      <Routes>
        <Route path="/" element={<Vehicle />} />
        <Route path="/spaceport" element={<Spaceport />} />
        <Route path="/capsule" element={<Capsule />} />
      </Routes>
    </div>
  );
};

export default TechnologyPage;
