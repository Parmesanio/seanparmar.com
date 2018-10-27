import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setBlogPosts } from '../../redux/blogReducer';
import BlogPosts from '../BlogPosts/BlogPosts';
import './blogcontainer.scss';

class BlogContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    componentDidMount() {
        this.props.setBlogPosts();
    }
    render() { 
        console.log(this.props);
        let blogPosts = withBlogData(BlogPosts, {...this.props});
        
        return ( 
            <div className="blog-container">
                BlogContainer
                {blogPosts}
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
    setBlogPosts
}
 
export default connect(mapStateToProps, mapDispatchToProps)(BlogContainer);

function withBlogData(WrappedComponent, data) {
    return <WrappedComponent data={data} />
}