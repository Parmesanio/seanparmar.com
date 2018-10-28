import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Landing from './components/Landing/Landing';
import BlogContainer from './components/BlogContainer/BlogContainer';
import BlogPost from './components/BlogPost/BlogPost';

export default (
    <Switch>
        <Route path="/blog/posts/create" component={BlogContainer} />
        <Route path="/blog/posts/:id/edit" render={(props) => {
            return <BlogContainer {...props} />
        }} />
        <Route path="/blog/posts/:id" component={BlogContainer} />
        <Route path="/blog/posts" component={BlogContainer} />
        {/* <Route path="/resume" component={Resume} /> */}
        <Route path="/" component={Landing} />
    </Switch>
)