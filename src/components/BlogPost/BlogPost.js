import React from 'react';
import { Link } from 'react-router-dom';
import './blogpost.scss';

const BlogPost = (props) => {
    window.scrollTo(0,0)
    console.log(props);
    let { post_imgurl, title, author, body, to_char, id, deleteBlogPost, history, user } = props;
    return ( 
        <div className="blog-post">
            <img src={post_imgurl} alt={title} />
            <div className="blog-body">
            {user && <>
            <Link to={`/blog/posts/${id}/edit`}>Edit Post</Link>
            <button onClick={() => deleteBlogPost(id, history)}>Delete Post</button>
            </>
            }
                <h1>{title}</h1>
                <h3>Posted by <a href="https://www.linkedin.com/in/sean-parmar/" target="_blank" rel="noopener noreferrer">{author}</a> on {to_char}</h3> 
                <p>{body}</p>
             </div>
        </div>
     );
}
 
export default BlogPost;