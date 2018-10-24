import React from 'react';
import './landing.scss';
import Showcase from '../Showcase/Showcase';
import Skills from '../Skills/Skills';
import Portfolio from '../Portfolio/Portfolio';
import Contact from '../Contact/Contact';

const Landing = () => {
    return ( 
    <div>
        <Showcase />
        <Skills />
        <Portfolio />
        <Contact />
    </div> );
}
 
export default Landing;