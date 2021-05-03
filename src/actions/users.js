export const RECEIVE_USERS = 'RECEIVE_USERS';
export const ADD_ANSWER = 'ADD_ANSWER';
export const ATTACH_QUESTION ='ATTACH_QUESTION';

/**
 * @description This is action creator function and responsible for creating action that receive users and save it the store.
 * @param {object} users 
 * @returns {object} action object that saves users.
 */
export function receiveUsers(users){
    return {
        type : RECEIVE_USERS ,
        users
    }
}
/**
 * @description This is action creator function and responsible for creating action that add answer to specific user. 
 * @param {string} authedUser 
 * @param {string} qid 
 * @param {string} answer 
 * @returns {object} action object that saves answer to the authenticated user.
 */
export function addAnswer(authedUser,qid,answer) {
    return {
        type : ADD_ANSWER,
        authedUser,
        qid,
        answer,
    }
}
/**
 * @description This is action creator function and responsible for creating action that quesiton to the authenticated user.
 * @param {object} authedUser 
 * @param {object} qid 
 * @returns  {object} action object that saves question to the authenticated user.
 */
export function attachQuestion(authedUser,qid){
    return{
        type:ATTACH_QUESTION,
        authedUser,
        qid
    }
}
