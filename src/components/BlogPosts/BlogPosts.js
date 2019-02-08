import React from 'react';
import { Link } from 'react-router-dom';
import BlogPost from '../BlogPost/BlogPost';
import './BlogPosts.scss'

const BlogPosts = (props) => {
    let { blogPosts, match, history, deleteBlogPost, user } = props.data;
    let mappedPosts = blogPosts && blogPosts.map(post => {
        let { post_url, title, author, body, to_char } = post;
        let pos1 = body.indexOf('Introduction');
        let pos2 = body.indexOf('Technologies');
        return <div className="blog-thumbnail" key={post.id}>
            <img src={post_url || 'https://images.pexels.com/photos/66997/pexels-photo-66997.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'} alt={title} />
            <h1>{title}</h1>
            <h3>{author}</h3> <span>{to_char}</span><br />
            <p dangerouslySetInnerHTML={{ __html: body.substring(body.indexOf('Introduction', pos1 + 1), body.indexOf('Technologies', pos2 + 1) - 450) + '...' }}></p>
            <Link className="read-more-link" to={`/blog/posts/${post.id}`}>Read More</Link>
        </div>
    })
    let post = blogPosts && blogPosts.find(post => {
        return post.id == match.params.id
    });
    return (
        <div className="blog-posts">
            {match.params.id ?
                <BlogPost {...post} history={history} deleteBlogPost={deleteBlogPost} user={user} /> :
                blogPosts && mappedPosts}
        </div>
    );
}

export default BlogPosts;