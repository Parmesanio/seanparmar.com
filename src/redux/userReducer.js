import axios from 'axios';
const initialState = {
    user: null
}


const SET_USER          = "SET_USER",
      DESTROY_USER      = "DESTROY_USER";


export default function userReducer(state = initialState, action) {
    switch(action.type) {
        case `${SET_USER}_FULFILLED`:
            return {...state, user: action.payload}
        case `${DESTROY_USER}_FULFILLED`:
            return {...state, user: action.payload}
        default:
            return {...state}
    }
}

export function setUser() {
    return {
        type: SET_USER,
        payload: axios.get('/api/admin-data').then(res => {
            return res.data
        }).catch(err => console.log('err in set_user', err))
    }
}
export function logout() {
    return {
        type: DESTROY_USER,
        payload: axios.post('/api/admin-data').then(res => res.data).catch(err => console.log('err in destroy user', err))
    }
}