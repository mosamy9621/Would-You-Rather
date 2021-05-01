export const RECEIVE_USERS = 'RECEIVE_USERS';
export const ADD_ANSWER = 'ADD_ANSWER';
export const ATTACH_QUESTION ='ATTACH_QUESTION';
export function receiveUsers(users){
    return {
        type : RECEIVE_USERS ,
        users
    }
}
export function addAnswer(authedUser,qid,answer) {
    return {
        type : ADD_ANSWER,
        authedUser,
        qid,
        answer,
    }
}
export function attachQuestion(authedUser,qid){
    return{
        type:ATTACH_QUESTION,
        authedUser,
        qid
    }
}
