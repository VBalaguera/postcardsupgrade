import React from "react";
import { Link } from 'react-router-dom'; 
import "../../../styles/SideDrawer.css";

const sideDrawer = props => {
  let drawerClasses = ["side-drawer"];

  if (props.show) {
    drawerClasses = ["side-drawer", "open"];
  }
  return (
    <nav className={drawerClasses.join(" ")}>
      <ul>
        <li>
          <Link to="/">FROM THE TOP</Link>
        </li>
        <li>
          <Link to="/updates-first">UPDATES FIRST</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
      </ul>
    </nav>
  );
};
export default sideDrawer;
