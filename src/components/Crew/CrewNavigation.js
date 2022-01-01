import React from "react";
import { NavLink } from "react-router-dom";
import classes from "../../styles/Crew/CrewNav.module.scss";

const CrewNavigation = () => {
  return (
    <div className={classes.destNav}>
      <nav>
        <ul>
          <li>
            <NavLink
              exact="true"
              strict="true"
              to="/space-tourism/crew/"
              className={({ isActive }) =>
                isActive ? classes.active : undefined
              }
            ></NavLink>
          </li>
          <li>
            <NavLink
              to="/space-tourism/crew/specialist"
              className={({ isActive }) =>
                isActive ? classes.active : undefined
              }
            ></NavLink>
          </li>
          <li>
            <NavLink
              to="/space-tourism/crew/pilot"
              className={({ isActive }) =>
                isActive ? classes.active : undefined
              }
            ></NavLink>
          </li>
          <li>
            <NavLink
              to="/space-tourism/crew/engineer"
              className={({ isActive }) =>
                isActive ? classes.active : undefined
              }
            ></NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default CrewNavigation;
