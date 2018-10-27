import axios from 'axios';
const initialState = {
    blogPosts: null
}

//Action Types

const SET_BLOG_POSTS        = "SET_BLOG_POSTS";

//Reducer Function
export default function blogReducer(state = initialState, action) {
    switch(action.type) {
        case `${SET_BLOG_POSTS}_FULFILLED`:
            return {...state, blogPosts: action.payload};
        default:
            return {...state}
    }
}

//Action Creators
export function setBlogPosts() {
    return {
        type: SET_BLOG_POSTS,
        payload: axios.get('/admin/blog/posts').then(res => res.data).catch(err => console.log('Err in SET_BLOG_POSTS', err))
    }
}