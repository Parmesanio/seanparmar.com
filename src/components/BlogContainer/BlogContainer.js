import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setBlogPosts } from '../../redux/blogReducer';

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
        
        return ( 
            <div className="blog-container">
                BlogContainer
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