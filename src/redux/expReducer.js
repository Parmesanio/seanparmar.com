import axios from 'axios';

const initialState = {
    experiences: null
}


const SET_EXPERIENCES       = "SET_EXPERIENCES";

export default function expReducer(state = initialState, action) {
    switch(action.type) {
        case `${SET_EXPERIENCES}_FULFILLED`:
            return {...state, experiences: action.payload}
        default:
            return {...state}
    }
}

export function setExp() {
    return {
        type: SET_EXPERIENCES,
        payload: axios.get('/admin/experiences').then(res => res.data).catch(err => console.log('err in SET_EXPERIENCES', err))
    }
}