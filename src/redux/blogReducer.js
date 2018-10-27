const initialState = {
    blogPosts: null
}

//Action Types

const SET_BLOG_POSTS        = "SET_BLOG_POSTS";

//Reducer Function
export default function blogReducer(state = initialState, action) {
    switch(action.type) {
        case SET_BLOG_POSTS:
            return {...state};
        default:
            return {...state}
    }
}

//Action Creators
