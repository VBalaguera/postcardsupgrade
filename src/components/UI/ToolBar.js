import React from "react";
import { Link } from "react-router-dom";
import SideMenu from "./sidemenu/SideMenu";
import {
  NavigationList,
  NavigationLinks,
} from "../../styled-components/Navigation";
import "../../styles/ToolBar.css";

const ToolBar = (props) => (
  <header className="toolbar">
    <nav className="toolbar_navigator">
      <div className="toolbar_logo">
        <Link to="/">POSTCARDS FROM ANOTHER GALAXY</Link>
      </div>
      <div className="toggle-btn">
        <SideMenu click={props.drawerToggleClickHandler} />
      </div>

      <div className="spacer" />
      <div className="toolbar_navigation-items">
        <NavigationList>
          <NavigationLinks>
            <Link to="/">FROM THE TOP</Link>
          </NavigationLinks>
          <NavigationLinks>
            <Link to="/updates-first">UPDATES FIRST</Link>
          </NavigationLinks>
          <NavigationLinks>
            <Link to="/about">About</Link>
          </NavigationLinks>
        </NavigationList>
      </div>
    </nav>
  </header>
);

export default ToolBar;
