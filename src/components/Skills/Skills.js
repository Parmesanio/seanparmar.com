import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './skills.scss';

const Skills = () => {
    return ( 
        <section className="skills">
            <h1>Skills</h1>
            <div className="skill-container">
            <div className="skill">
            <FontAwesomeIcon icon={['fab', 'html5']} />
            <br />
            <a href="#" target="_blank" rel="noopener noreferrer">HTML5</a>
            </div>
            <div className="skill">
            <FontAwesomeIcon icon={['fab', 'css3-alt']} />
            <br />
            <a href="#" target="_blank" rel="noopener noreferrer">CSS3</a>
            </div>
            <div className="skill">
            <FontAwesomeIcon icon={['fab', 'js-square']} />
            <br />
            <a href="#" target="_blank" rel="noopener noreferrer">JS</a>
            </div>
            <div className="skill">
            <FontAwesomeIcon icon={['fab', 'sass']} />
            <br />
            <a href="#" target="_blank" rel="noopener noreferrer">Sass</a>
            </div>
            <div className="skill">
            <FontAwesomeIcon icon={['fab', 'react']} />
            <br />
            <a href="#" target="_blank" rel="noopener noreferrer">React</a>
            </div>
            <div className="skill">
            <FontAwesomeIcon icon={['fab', 'node-js']} />
            <br />
            <a href="#" target="_blank" rel="noopener noreferrer">Node.Js</a>
            </div>
            <div className="skill">
            <FontAwesomeIcon icon={['fas', 'server']} />
            <br />
            <a href="#" target="_blank" rel="noopener noreferrer">Express</a>
            </div>
            <div className="skill">
            <FontAwesomeIcon icon={['fas', 'database']} />
            <br />
            <a href="#" target="_blank" rel="noopener noreferrer">Postgresql</a>
            </div>
            <div className="skill">
            <svg width="40px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 36" version="1.1" height="36px">
                <title>Swift</title>
                <defs>
                <linearGradient id="a" x2="50%" x1="50%" y2="100%">
                    <stop offset="0"></stop>
                    <stop offset="1"></stop>
                </linearGradient>
                </defs>
                <path d="m29.885 33.047c-4.667 2.696-11.084 2.973-17.54 0.206-5.2273-2.224-9.5646-6.117-12.345-10.565 1.3346 1.112 2.8916 2.002 4.5598 2.78 6.6672 3.125 13.333 2.911 18.024 0.008-0.003-0.003-0.005-0.005-0.007-0.008-6.673-5.116-12.345-11.789-16.571-17.238-0.8901-0.8898-1.5574-2.002-2.2247-3.0029 5.1159 4.671 13.235 10.565 16.126 12.234-6.116-6.451-11.566-14.458-11.344-14.236 9.676 9.787 18.685 15.348 18.685 15.348 0.298 0.168 0.528 0.308 0.713 0.433 0.195-0.496 0.366-1.011 0.51-1.545 1.557-5.672-0.222-12.123-4.115-17.461 9.008 5.4495 14.347 15.681 12.122 24.245-0.058 0.231-0.121 0.459-0.189 0.683 0.026 0.031 0.052 0.063 0.078 0.096 4.448 5.561 3.225 11.455 2.669 10.343-2.413-4.722-6.88-3.278-9.151-2.32z" fill="url(#a)"></path>
            </svg>
            <br />
            <a href="#" target="_blank" rel="noopener noreferrer">Swift</a>
            </div>

            </div>
        </section>
     );
}
 
export default Skills;