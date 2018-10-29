import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setBlogPosts, createBlogPost, editBlogPost, deleteBlogPost } from '../../redux/blogReducer';
import BlogPosts from '../BlogPosts/BlogPosts';
import BlogForm from '../BlogForm/BlogForm';
import './blogcontainer.scss';

class BlogContainer extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            postTitle: '',
            postURL: '',
            postBody: ''
         }
    }
    componentDidMount() {
        this.props.setBlogPosts();
        setTimeout(() => {
            let post = (this.props.match.params.id && this.props.blogPosts) && this.props.blogPosts.find(post => {
                return post.id == this.props.match.params.id
            });
           post &&  this.setState({
                postTitle: post.title,
                postURL: post.post_imgurl,
                postBody: post.body
            })
            console.log(post);
        }, 500)
    }
    handleInputChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }
    setPhotoURL = (url) => {
        this.setState({
            postURL: url
        })
    }
     withBlogData = (WrappedComponent, data) => {
        if(WrappedComponent == BlogForm) {
            return <WrappedComponent 
                        createBlogPost={data.createBlogPost}
                        editBlogPost={data.editBlogPost} 
                        history={data.history} 
                        match={data.match}
                        handleInputChange={this.handleInputChange}
                        setPhotoURL={this.setPhotoURL} 
                        blogPosts={data.blogPosts}
                        postTitle={this.state.postTitle} 
                        postURL={this.state.postURL} 
                        postBody={this.state.postBody} />
        } else {
            return <WrappedComponent data={data} />
        }
    }

    render() { 
        console.log(this.props);
        let blogPosts = this.withBlogData(BlogPosts, {...this.props});
        let blogForm = this.withBlogData(BlogForm, {...this.props})
        return ( 
            <section className="blog-container">
                {this.props.match.path == '/blog/posts' && blogPosts}
                {this.props.match.path == '/blog/posts/:id' && blogPosts}
                {this.props.match.path == '/blog/posts/create' && blogForm}
                {this.props.match.path == '/blog/posts/:id/edit' && blogForm}
            </section>
         );
    }
}
const mapStateToProps = state => {
    let { blogPosts } = state.blog;
    return {
        blogPosts
    }
}
const mapDispatchToProps = {
    setBlogPosts,
    createBlogPost,
    editBlogPost,
    deleteBlogPost
}
 
export default connect(mapStateToProps, mapDispatchToProps)(BlogContainer);