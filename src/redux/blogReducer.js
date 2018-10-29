import axios from 'axios';
const initialState = {
    blogPosts: null
}

//Action Types

const SET_BLOG_POSTS        = "SET_BLOG_POSTS",
      CREATE_BLOG_POST      = "CREATE_BLOG_POST",
      EDIT_BLOG_POST        = "EDIT_BLOG_POST",
      DELETE_BLOG_POST      = "DELETE_BLOG_POST";

//Reducer Function
export default function blogReducer(state = initialState, action) {
    switch(action.type) {
        case `${SET_BLOG_POSTS}_FULFILLED`:
            return {...state, blogPosts: action.payload};
        case `${CREATE_BLOG_POST}_FULFILLED`:
            return {...state, blogPosts: action.payload}
        case `${EDIT_BLOG_POST}_FULFILLED`:
            return {...state, blogPosts: action.payload}
        case `${DELETE_BLOG_POST}_FULFILLED`:
            return {...state, blogPosts: action.payload}
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
export function createBlogPost(admin_id, admin_name, postTitle, postURL, postBody, history) {
    console.log(admin_id, admin_name, postTitle, postURL, postBody, history);
    return {
        type: CREATE_BLOG_POST,
        payload: axios.post('/admin/blog/posts', {admin_id, admin_name, postTitle, postURL, postBody}).then(res => {
            history.push('/blog/posts');
            return res.data;
        }).catch(err => console.log('Err in createBlogPost', err))
    }
}
export function editBlogPost(post_id, postTitle, postURL, postBody, history) {
    console.log(post_id, postTitle, postURL, postBody, history);
    return {
        type: EDIT_BLOG_POST,
        payload: axios.put(`/admin/blog/posts/${post_id}`, {postTitle, postURL, postBody}).then(res => {
            console.log(res.data);
            history.push('/blog/posts');
            return res.data;
        }).catch(err => console.log('Err in createBlogPost', err))
    }
}
export function deleteBlogPost(id, history) {
    console.log(id);
    return {
        type: DELETE_BLOG_POST,
        payload: axios.delete(`/admin/blog/posts/${id}`).then(res => {
            console.log(res.data);
            history.push('/blog/posts');
            return res.data;
        })
    }
}