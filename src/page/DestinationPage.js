import React from "react";
import { Routes, Route } from "react-router-dom";
import Europa from "../components/Destination/Europa";
import Mars from "../components/Destination/Mars";
import Moon from "../components/Destination/Moon";
import Titan from "../components/Destination/TItan";
import Navigation from "../components/Navigation";
import classes from '../styles/PageStyles/DestinationPage.module.scss'


function DestinationPage() {
  return (
    <div className={classes.container}>
      <Navigation />
      <Routes>
        <Route path="/" element={<Moon />} />
        <Route path="/titan" element={<Titan />} />
        <Route path="/mars" element={<Mars />} />
        <Route path="/europa" element={<Europa />} />
      </Routes>
    </div>
  );
}

export default DestinationPage;
