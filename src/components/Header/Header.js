import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './header.scss';

const Header = () => {
    return ( 
        <header>
            <nav>
                <a href="#"><h1>Sean Parmar</h1></a>
                <Link to="/">Home</Link>
                <a href="#">Portfolio</a>
                <a href="#">Contact</a>
                <a href="#" target="_blank" rel="noopener noreferrer">Blog</a>
                <a href="#" target="_blank" rel="noopener noreferrer">Resume</a>
            </nav>
            <div className="socials">
                <a href="https://www.linkedin.com/in/sean-parmar-996132135/" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={['fab', 'linkedin-in']} /></a>
                <a href="https://github.com/Parmesanio" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={['fab', 'github']} /></a>
                <a href="https://codepen.io/Parmesanio/" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={['fab', 'codepen']} /></a>
                <a href="https://itunes.apple.com/us/developer/sean-parmar/id1356437548?mt=8" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={['fab', 'app-store']} /></a>
            </div>
        </header>
     );
}
 
export default Header;