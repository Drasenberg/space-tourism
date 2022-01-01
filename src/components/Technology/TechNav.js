import React from "react";
import { NavLink } from "react-router-dom";

import classes from "../../styles/Technology/TechNav.module.scss";

const TechNav = () => {
  return (
    <div className={classes.techNav}>
      <nav>
        <ul>
          <li>
            <NavLink
              exact="true"
              strict="true"
              to="/space-tourism/technology/"
              className={({ isActive }) =>
                isActive ? classes.active : undefined
              }
            >
              1
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/space-tourism/technology/spaceport"
              className={({ isActive }) =>
                isActive ? classes.active : undefined
              }
            >
              2
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/space-tourism/technology/capsule"
              className={({ isActive }) =>
                isActive ? classes.active : undefined
              }
            >
              3
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default TechNav;
