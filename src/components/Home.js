import React from "react";
import classes from '../styles/Home.module.scss'

function Home() {
  return (
    <div className={classes.container}>
      <div className={classes.home}>
        <div className={classes.about}>
          <h5>So, you want to travel to</h5>
          <h1>Space</h1>
          <p>
            Let’s face it; if you want to go to space, you might as well genuinely
            go to outer space and not hover kind of on the edge of it. Well sit
            back, and relax because we’ll give you a truly out of this world
            experience!
          </p>
        </div>
        <button>Explore</button>
      </div>
    </div>
  );
}

export default Home;
