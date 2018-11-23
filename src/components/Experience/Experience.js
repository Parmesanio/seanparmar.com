import React from 'react';
import { Link } from 'react-router-dom';
import './experience.scss';

const Experience = (props) => {
    console.log(props);
    let { title, tech, body, post_imgurl, id } = props;
    
    return ( 
        <div className="experience">
            <img src={post_imgurl} />
            <h1>{title}</h1>
            <p>{body && body.substring(0, 100)}</p>
            <p>Tech used: {tech}</p>
            <div className="experience-buttons">
                <Link to={`/blog/posts/${id}`}><button className="blogButton">Blog</button></Link>
                <a href="https://github.com/Parmesanio/personalproject" target="_blank" rel="noopener noreferrer" ><button>Github</button></a>
            </div>
        </div>
     );
}
 
export default Experience;