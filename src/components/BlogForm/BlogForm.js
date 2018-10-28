import React from 'react';

const BlogForm = (props) => {
    console.log('BLOG FORM ======>', props);
    let { createBlogPost, postTitle, postURL, postBody, history } = props;
    return ( 
        <div className="blog-form">
        {/* Post Author Name from admin in session */}
           <form onSubmit={(event) => event.preventDefault()}>
                <input name="postTitle" placeholder="Post Title" onChange={(event) => props.handleInputChange(event)} /> 
                <input name="postURL" placeholder="Image URL" onChange={(event) => props.handleInputChange(event)} /> 
                <textarea name="postBody" placeholder="Post Body" onChange={(event) => props.handleInputChange(event)} /> 
                <button onClick={() => createBlogPost(1326999099, 'Sean Parmar', postTitle, postURL, postBody, history)}>Submit</button>
           </form>
        </div>
     );
}
 
export default BlogForm;