import React from "react";
import "../../../styles/SideMenu.css";

const menuToggleButton = (props) => (
  <button className="toggle-button" onClick={props.click}>
    <div className="toggle-button-logo" />
  </button>
);

export default menuToggleButton;
