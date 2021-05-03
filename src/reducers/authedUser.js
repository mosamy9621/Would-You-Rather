import { SET_AUTHED_USER } from '../actions/authedUser'

/**
 * @description : This is a reducer function (pure function) and responsible for handling all the actions that deal with authedUser. 
 * @param {object} state 
 * @param {object} action 
 * @returns 
 */
export default function authedUser(state = null, action) {
    switch (action.type) {
        case SET_AUTHED_USER:
            return action.id;
        default:
            return state;
    }
}