import { createStore, combineReducers, applyMiddleware } from 'redux';
import reduxPromiseMiddleware from 'redux-promise-middleware';
import blogReducer from './blogReducer';

const reducer = combineReducers({
    blog: blogReducer
});
const store = createStore(reducer, applyMiddleware(reduxPromiseMiddleware()))

export default store;