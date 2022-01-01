import React from "react";
import { NavLink } from "react-router-dom";
import classes from "../../styles/Destination/DestinationNav.module.scss";

const DestinationNav = () => {
  return (
    <div className={classes.destNav}>
      <nav>
        <ul>
          <li>
            <NavLink
              exact="true"
              strict="true"
              to="/space-tourism/destination/"
              className={({ isActive }) =>
                isActive ? classes.active : undefined
              }
            >
              Moon
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/space-tourism/destination/mars"
              className={({ isActive }) =>
                isActive ? classes.active : undefined
              }
            >
              Mars
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/space-tourism/destination/europa"
              className={({ isActive }) =>
                isActive ? classes.active : undefined
              }
            >
              Europa
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/space-tourism/destination/titan"
              className={({ isActive }) =>
                isActive ? classes.active : undefined
              }
            >
              Titan
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default DestinationNav;
