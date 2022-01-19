import React from "react";
import { Link } from "react-router-dom";
import "../styles/About.css";

const About = () => {
  return (
    <div className="about-container">
      <div className="about-container-contents-text">
        <p>POSTCARDS FROM ANOTHER GALAXY</p>
        <p>
          Is a fan-made project that celebrates the ocassional beauty and
          surreal humor of{" "}
          <a
            className="about-container-contents-text-link"
            href="https://www.nomanssky.com/"
            target="#"
          >
            {" "}
            Hello Games' No Man's Sky.
          </a>
        </p>
        <p>
          Created for educational purposes by{" "}
          <a
            className="about-container-contents-text-link"
            href="https://adoring-booth-e85f44.netlify.app/"
            target="blank"
          >
            Víctor Balaguera
          </a>{" "}
          in 2022.
        </p>
        <p>Made in Madrid.</p>
        <Link className="about-container-contents-text-link" to="/">
          Go back
        </Link>
      </div>
    </div>
  );
};

export default About;
