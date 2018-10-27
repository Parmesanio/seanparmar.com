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

            </div>
        </section>
     );
}
 
export default Skills;