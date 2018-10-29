import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Landing from './components/Landing/Landing';
import BlogContainer from './components/BlogContainer/BlogContainer';
import BlogPost from './components/BlogPost/BlogPost';
import Login from './components/Login/Login';

export default (
    <Switch>
        <Route path="/login" component={Login} />
        <Route path="/blog/posts/create" component={BlogContainer} />
        {/* Add key to render component when routing multiple paths */}
        <Route key={'EditForm'} path="/blog/posts/:id/edit" component={BlogContainer} />
        <Route path="/blog/posts/:id" component={BlogContainer} />
        <Route path="/blog/posts" component={BlogContainer} />
        {/* <Route path="/resume" component={Resume} /> */}
        <Route path="/" component={Landing} />
    </Switch>
)