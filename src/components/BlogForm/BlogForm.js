import React from 'react';

const BlogForm = (props) => {
    console.log('BLOG FORM ======>', props);
    let { createBlogPost, postTitle, postURL, postBody, history, blogPosts, match, editBlogPost } = props;
    return ( 
        <div className="blog-form">
        {/* Post Author Name from admin in session */}
           <form onSubmit={(event) => event.preventDefault()}>
                <h1>{match.params.id ? "Edit Post" : "New Post"}</h1>
                <input name="postTitle" value={postTitle} placeholder="Post Title" onChange={(event) => props.handleInputChange(event)} /> 
                <input name="postURL" value={postURL} placeholder="Image URL" onChange={(event) => props.handleInputChange(event)} /> 
                <textarea name="postBody" value={postBody} placeholder="Post Body" onChange={(event) => props.handleInputChange(event)} /> 
                {match.params.id ? 
                    <button onClick={() => editBlogPost(match.params.id, postTitle, postURL, postBody, history)}>Edit Post</button> :
                    <button onClick={() => createBlogPost(1326999099, 'Sean Parmar', postTitle, postURL, postBody, history)}>Submit New Post</button>
                }
           </form>
        </div>
     );
}
 
export default BlogForm;