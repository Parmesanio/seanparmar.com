import { createStore, combineReducers, applyMiddleware } from 'redux';
import reduxPromiseMiddleware from 'redux-promise-middleware';
import blogReducer from './blogReducer';
import userReducer from './userReducer';

const reducer = combineReducers({
    blog: blogReducer,
    user: userReducer
});
const store = createStore(reducer, applyMiddleware(reduxPromiseMiddleware()))

export default store;