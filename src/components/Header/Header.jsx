import React from "react";
import classes from "./Header.module.css";

const Header = () => {
 return (
  <header className={classes.header}>
   <img
    className={classes.logo}
    src="https://www.pngmart.com/files/13/Akatsuki-Logo-PNG-Pic.png"
   />
  </header>
 );
};
export default Header;
