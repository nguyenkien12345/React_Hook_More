// import actions
import * as types from '../actions/actionTypes';

export const AuthReducer = (state = {}, action) => {
    const {type, payload} = action;
    switch(type){
        case types.AUTH_TOGGLE:
            return !state;

        default:
            return state;
    }
}