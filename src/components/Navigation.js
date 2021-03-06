import React from "react";
import { Fragment } from "react";
import { useState } from "react";
import { NavLink, useLocation, Outlet } from "react-router-dom";
import classes from "../styles/Navigation.module.scss";
import logo from "../assets/shared/logo.svg";
import hamburegIcon from "../assets/shared/icon-hamburger.svg";
import closeIcon from "../assets/shared/icon-close.svg";
import MobileNavi from "./MobileNavi";

function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const openMenu = () => {
    setIsOpen(!isOpen);
  };
  const location = useLocation();
  let destUrl = "destination";
  let crewUrl = "crew";
  let techUrl = "technology";
  let homeUrl = "home";

  return (
    <Fragment>
      <nav>
        <div className={classes.logo}>
          <img src={logo} alt="" />
        </div>
        <div
          className={
            isOpen ? classes.menu : `${classes.menu} ${classes.menuClosed}`
          }
        >
          <div className={classes.toggle} onClick={openMenu}>
            {!isOpen && <img src={hamburegIcon} alt="" />}
            {isOpen && <img src={closeIcon} alt="" />}
          </div>

          <ul className={classes.tabletNav}>
            <li>
              <NavLink
                className={() =>
                  location.pathname.includes(homeUrl)
                    ? classes.active
                    : undefined
                }
                to="/space-tourism/home"
              >
                <span>00</span>Home
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) =>
                  location.pathname.includes(destUrl)
                    ? classes.active
                    : undefined
                }
                to="/space-tourism/destination/"
              >
                <span>01</span>Destination
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) =>
                  location.pathname.includes(crewUrl)
                    ? classes.active
                    : undefined
                }
                to="/space-tourism/crew/"
              >
                <span>02</span>Crew
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) =>
                  location.pathname.includes(techUrl)
                    ? classes.active
                    : undefined
                }
                to="/space-tourism/technology/"
              >
                <span>03</span>Technology
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
      {isOpen && <MobileNavi />}

      <Outlet />
    </Fragment>
  );
}

export default Navigation;
