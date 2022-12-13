import React from "react";
import { NavLink } from "react-router-dom";
import classes from "./Navbar.module.css";

const Nav = () => {
 return (
  <nav className={classes.nav}>
   <div>
    <NavLink
     to="/profile"
     className={(link) => (link.isActive ? classes.active : "")}
    >
     Profile
    </NavLink>
   </div>
   <div>
    <NavLink
     to="/dialogs"
     className={(link) => (link.isActive ? classes.active : "")}
    >
     Messages
    </NavLink>
   </div>
   <div>
    <NavLink
     to="/feed"
     className={(link) => (link.isActive ? classes.active : "")}
    >
     News
    </NavLink>
   </div>
   <div>
    <NavLink
     to="/music"
     className={(link) => (link.isActive ? classes.active : "")}
    >
     Music
    </NavLink>
   </div>
   <div>
    <NavLink
     to="/settings"
     className={(link) => (link.isActive ? classes.active : "")}
    >
     Settings
    </NavLink>
   </div>
  </nav>
 );
};

export default Nav;
