export const SET_AUTHED_USER = 'SET_AUTHED_USER';

/**
 * @description This is action creator function and responsible for creating action that sets authintcated user to the store.
 * @param {string} authedUser 
 * @returns {object} action object that sets authedUser received as a parameter. 
 */
export function setAuthedUser(authedUser) {
    return {
        type: SET_AUTHED_USER,
        id :authedUser
    }
}