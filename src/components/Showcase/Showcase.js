import React from "react";
import "./showcase.scss";
import ContactDesktop from "../Contact/ContactDesktop";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Showcase = () => {
  return (
    <section id="showcase">
      <div className="showcase-container">
        <div>
          <h1>
            Hello, I'm Sean,
            <br /> a Web Developer
          </h1>
          <hr />
          <p>Currently seeking new job opportunities.<br /><br />Get in touch!</p>
          <div className="socials">
            <a
              href="https://www.linkedin.com/in/sean-parmar"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={["fab", "linkedin-in"]} />
            </a>
            <a
              href="https://github.com/Parmesanio"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={["fab", "github"]} />
            </a>
            <a
              href="https://codepen.io/Parmesanio/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={["fab", "codepen"]} />
            </a>
            <a
              href="https://itunes.apple.com/us/developer/sean-parmar/id1356437548?mt=8"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={["fab", "app-store"]} />
            </a>
          </div>
        </div>
        <ContactDesktop />
      </div>
    </section>
  );
};

export default Showcase;
