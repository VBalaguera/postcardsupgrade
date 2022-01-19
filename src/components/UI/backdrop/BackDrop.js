import React from "react";
import { Link } from "react-router-dom";
import "../../../styles/BackDrop.css";

const links = [
  {
    name: "FROM THE TOP",
    url: "/",
  },
  {
    name: "UPDATES FIRST",
    url: "/updates-first",
  },
  {
    name: "ABOUT",
    url: "/about",
  },
];

const backdrop = (props) => (
  <div className="backdrop" onClick={props.click}>
    <div className="backdrop-links">
      {links.map((link) => (
        <Link className="backdrop-links-link" to={link.url}>
          {link.name}
        </Link>
      ))}
    </div>
  </div>
);

export default backdrop;
