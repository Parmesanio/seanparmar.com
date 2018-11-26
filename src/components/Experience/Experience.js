import React from 'react';
import { Link } from 'react-router-dom';
import './experience.scss';

const Experience = (props) => {
    let { title, tech, body, post_imgurl, id } = props;
    return ( 
        <div className="experience">
            <img src={post_imgurl || 'https://images.pexels.com/photos/66997/pexels-photo-66997.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'} />
            <h1>{title}</h1>
            {body && <p dangerouslySetInnerHTML={{__html: body.substring(0, 100) + '...'}}></p>}
            <p>Tech used: {tech}</p>
            <div className="experience-buttons">
                <Link to={`/blog/posts/${id}`}><button className="blogButton">Blog</button></Link>
            </div>
        </div>
     );
}
 
export default Experience;