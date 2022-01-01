import React from "react";
import Home from "../components/Home";
import Navigation from "../components/Navigation";
import classes from "../styles/PageStyles/HomePage.module.scss";

function HomePage() {
  return (
    <div className={classes.container}>
      <Navigation />
      <Home />
    </div>
  );
}

export default HomePage;
