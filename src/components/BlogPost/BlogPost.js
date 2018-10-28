import React from 'react';
import { Link } from 'react-router-dom';

const BlogPost = (props) => {
    console.log(props);
    let { post_imgurl, title, author, body, to_char, id, deleteBlogPost, history } = props;
    return ( 
        <div>
            <Link to={`/blog/posts/${id}/edit`}>Edit Post</Link>
            <button onClick={() => deleteBlogPost(id, history)}>Delete Post</button>
            <img src={post_imgurl} alt={title} />
            <h1>{title}</h1>
            <h3>{author}</h3> <span>{to_char}</span>
             <p>{body}</p>
        </div>
     );
}
 
export default BlogPost;