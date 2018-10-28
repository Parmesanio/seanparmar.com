import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setBlogPosts, createBlogPost } from '../../redux/blogReducer';
import BlogPosts from '../BlogPosts/BlogPosts';
import BlogForm from '../BlogForm/BlogForm';
import './blogcontainer.scss';

class BlogContainer extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            postTitle: null,
            postURL: null,
            postBody: null
         }
    }
    componentDidMount() {
        this.props.setBlogPosts();
    }
    handleInputChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }
     withBlogData = (WrappedComponent, data) => {
        if(WrappedComponent == BlogForm) {
            return <WrappedComponent createBlogPost={data.createBlogPost} history={data.history} handleInputChange={this.handleInputChange} postTitle={this.state.postTitle} postURL={this.state.postURL} postBody={this.state.postBody} />
        } else {
            return <WrappedComponent data={data} />
        }
    }

    render() { 
        console.log(this.props);
        let blogPosts = this.withBlogData(BlogPosts, {...this.props});
        let blogForm = this.withBlogData(BlogForm, {...this.props})
        return ( 
            <div className="blog-container">
                {this.props.location.pathname == '/blog/posts' && blogPosts}
                {this.props.location.pathname == '/blog/posts/create' && blogForm}
            </div>
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
    createBlogPost
}
 
export default connect(mapStateToProps, mapDispatchToProps)(BlogContainer);

// function withBlogData(WrappedComponent, data) {
//     return <WrappedComponent data={data} />
// }