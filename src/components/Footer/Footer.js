import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import './footer.scss';

const Footer = (props) => {
    return (
        <footer>
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
            <p>&copy; {(new Date().getFullYear())} Sean Parmar</p>
        </footer>
    );
}

export default Footer;