import React from "react";
import { Link } from "react-router-dom";
import "./experience.scss";

const Experience = props => {
  let {
    title,
    tech,
    body,
    post_url,
    blog_id,
    isHovering,
    setHovering,
    i
  } = props;
  let pos1 = body.indexOf('Introduction');
  let pos2 = body.indexOf('Technologies');

  return (
    <div
      className="experience"
      onMouseEnter={() => setHovering(i)}
      onMouseLeave={() => setHovering(i)}
    >
      <img
        src={
          post_url ||
          "https://images.pexels.com/photos/66997/pexels-photo-66997.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
        }
      />
      <div className={`${isHovering[i] && "is-hovering"} details`}>
        <h1>{title}</h1>
        {body && (
          <p
            dangerouslySetInnerHTML={{
              __html: body.substring(body.indexOf('Introduction', pos1 + 1), body.indexOf('Technologies', pos2 + 1) - 450) + "..."
            }}
          />
        )}
        <div className="experience-buttons">
          <Link to={`/blog/posts/${blog_id}`}>
            <button className="blogButton">View Post</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Experience;
