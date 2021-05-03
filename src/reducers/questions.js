import { RECEIVE_QUESTIONS, SAVE_ANSWER,ADD_QUESTION } from '../actions/questions';

/**
 * @description : This is a reducer function (pure function) and responsible for handling all the actions that deal with questions.
 * @param {object} state 
 * @param {object} action 
 * @returns {object} new state after executing some action.
 */
export default function questions(state = {}, action) {
    switch (action.type) {
        case RECEIVE_QUESTIONS:
            return {
                ...state,
                ...action.questions
            }
        case SAVE_ANSWER:
            let arrVotes = state[action.qid][action.answer].votes;
            return {
                ...state,
                [action.qid]: {
                    ...state[action.qid],
                    [action.answer]: {
                        ...state[action.qid][action.answer],
                        votes: [...arrVotes, action.authedUser]
                    }
                }
            }
            case ADD_QUESTION : 
            return {
                ...state,
                [action.question.id] : {
                    ...action.question
                }
            }
        default:
            return state;
    }
}