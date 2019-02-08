import React from 'react';
import { Link } from 'react-router-dom';
import './blogpost.scss';

const BlogPost = (props) => {
    window.scrollTo(0, 0)
    let { post_url, title, author, body, to_char, id, deleteBlogPost, history, user } = props;
    return (
        <div id="blog-post">
            <div className="image-container">
                <img src={post_url || 'https://images.pexels.com/photos/66997/pexels-photo-66997.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'} alt={title} />
            </div>
            <div className="blog-body">
                {user && <>
                    <Link to={`/blog/posts/${id}/edit`}>Edit Post</Link>
                    <button onClick={() => deleteBlogPost(id, history)}>Delete Post</button>
                </>
                }
                <h1>{title}</h1>
                <h3>Posted by <a href="https://www.linkedin.com/in/sean-parmar/" target="_blank" rel="noopener noreferrer">{author}</a> on {to_char}</h3>
                <p dangerouslySetInnerHTML={{ __html: body }}></p>
            </div>
        </div>
    );
}

export default BlogPost;