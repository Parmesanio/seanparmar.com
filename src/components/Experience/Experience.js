import React from 'react';
import './experience.scss';

const Experience = (props) => {
    return ( 
        <div className="experience">
            <img src="https://res.cloudinary.com/parmesanio/image/upload/v1541173906/smartmockups_jo06m849-min_se8eyt.png" />
            <h1>The Talkin' Monkeys Project, Inc.</h1>
            <p>Website prototype with the goal of promoting volunteering and donations.</p>
            <p>Tech used: ReactJS, Redux, JavaScript, Node.js, PostgreSQL, Auth0, OpenWeatherMap API, Google Maps, Stripe,  Cloudinary, RESTful API, Sass, Progressive Web App</p>
            <div className="experience-buttons">
                <button className="blogButton">Blog</button>
                <button>Github</button>
            </div>
        </div>
     );
}
 
export default Experience;