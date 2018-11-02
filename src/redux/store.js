import { createStore, combineReducers, applyMiddleware } from 'redux';
import reduxPromiseMiddleware from 'redux-promise-middleware';
import blogReducer from './blogReducer';
import userReducer from './userReducer';
import expReducer from './expReducer';

const reducer = combineReducers({
    blog: blogReducer,
    user: userReducer,
    experience: expReducer
});
const store = createStore(reducer, applyMiddleware(reduxPromiseMiddleware()))

export default store;