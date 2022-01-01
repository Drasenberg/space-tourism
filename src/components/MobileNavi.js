import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import classes from "../styles/MobileNav.module.scss";

const MobileNavi = () => {
  const location = useLocation();
  let destUrl = "destination";
  let crewUrl = "crew";
  let techUrl = "technology";
  let homeUrl = "home";
  return (
    <div className={classes.mobileNav}>
      <ul>
        <li>
          <NavLink
            className={() =>
              location.pathname.includes(homeUrl) ? classes.active : undefined
            }
            to="/space-tourism/home"
          >
            <span>00</span>Home
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) =>
              location.pathname.includes(destUrl) ? classes.active : undefined
            }
            to="/space-tourism/destination/"
          >
            <span>01</span>Destination
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) =>
              location.pathname.includes(crewUrl) ? classes.active : undefined
            }
            to="/space-tourism/crew/"
          >
            <span>02</span>Crew
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) =>
              location.pathname.includes(techUrl) ? classes.active : undefined
            }
            to="/space-tourism/technology/"
          >
            <span>03</span>Technology
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default MobileNavi;
