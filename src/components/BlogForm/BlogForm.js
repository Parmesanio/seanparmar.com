import React from 'react';
import Dropzone from 'react-dropzone';
import axios from 'axios';
import './blogform.scss';

const BlogForm = (props) => {
    let { createBlogPost, postTitle, postURL, postBody, history, blogPosts, match, editBlogPost } = props;
    const handleImageUpload = (file) => {
        axios.get('/api/upload').then(response => {
            let formData = new FormData();
            formData.append("signature", response.data.signature)
            formData.append("api_key", process.env.REACT_APP_CLOUDINARY_API_KEY);
            formData.append("timestamp", response.data.timestamp)
            formData.append("file", file[0]);
            axios.post(process.env.REACT_APP_CLOUDINARY_UPLOAD_URL, formData).then(response => {
                props.setPhotoURL(response.data.secure_url)
            }).catch(err => console.log(err))
        })
    }

    return (
        <div className="blog-form">
            <h1>{match.params.id ? "Edit Post" : "New Post"}</h1>
            <form onSubmit={(event) => event.preventDefault()}>

                <input name="postTitle" value={postTitle} placeholder="Post Title" onChange={(event) => props.handleInputChange(event)} autoFocus="true" />
                <Dropzone
                    multiple={false}
                    accept='image/*'
                    onDrop={handleImageUpload}
                    name="postURL"
                    onChange={(event) => props.handleInputChange(event)}
                >
                    <p>Blog Image</p>
                </Dropzone>
                <input value={postURL} placeholder="Image URL" onChange={(event) => props.handleInputChange(event)} disabled={true} />
                <textarea name="postBody" value={postBody} placeholder="Post Body" onChange={(event) => props.handleInputChange(event)} />
                {match.params.id ?
                    <button onClick={() => editBlogPost(match.params.id, postTitle, postURL, postBody, history)}>Edit Post</button> :
                    <button onClick={() => createBlogPost(1241588087, 'Sean Parmar', postTitle, postURL, postBody, history)}>Submit New Post</button>
                }
            </form>
        </div>
    );
}

export default BlogForm;