import React from "react";
import { Routes, Route } from "react-router-dom";
import Commander from "../components/Crew/Commander";
import Specialist from "../components/Crew/Specialist";
import Pilot from "../components/Crew/Pilot";
import Engineer from "../components/Crew/Engineer";
import Navigation from "../components/Navigation";
import classes from "../styles/PageStyles/CrewPage.module.scss";

function CrewPage() {
  return (
    <div className={classes.container}>
      <Navigation />
      <Routes>
        <Route path="/" element={<Commander />} />
        <Route path="/specialist" element={<Specialist />} />
        <Route path="/pilot" element={<Pilot />} />
        <Route path="/engineer" element={<Engineer />} />
      </Routes>
    </div>
  );
}

export default CrewPage;
