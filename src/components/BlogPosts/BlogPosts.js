import React from 'react';
import { Link } from 'react-router-dom';
import BlogPost from '../BlogPost/BlogPost';

const BlogPosts = (props) => {
    console.log("BLOG POSTS",props.data);
    let { blogPosts, match, history, deleteBlogPost } = props.data;
    let mappedPosts = blogPosts && blogPosts.map(post => {
        let { post_imgurl, title, author, body, to_char } = post
        return <div key={post.id}>
                <img src={post_imgurl} alt={title} />
                <h1>{title}</h1>
                <h3>{author}</h3> <span>{to_char}</span>
                <Link to={`/blog/posts/${post.id}`}>Read More</Link>
            </div>
    })
    let post = blogPosts && blogPosts.find(post => {
        console.log(post);
        
        return post.id == match.params.id
    });
    console.log(post);
    
    return ( 
        <section className="blog-posts">
            {match.params.id ? 
            <BlogPost {...post} history={history} deleteBlogPost={deleteBlogPost} /> :
            blogPosts &&  mappedPosts}
        </section>
     );
}
 
export default BlogPosts;