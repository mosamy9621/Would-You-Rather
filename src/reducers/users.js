import { RECEIVE_USERS, ADD_ANSWER,ATTACH_QUESTION } from '../actions/users';
export default function users(state = {}, action) {
    switch (action.type) {
        case RECEIVE_USERS:
            return {
                ...state,
                ...action.users
            }
        case ADD_ANSWER:
            return {
                ...state,
                [action.authedUser]: {
                    ...state[action.authedUser],
                    answers: {
                        ...state[action.authedUser].answers,
                        [action.qid]: action.answer,
                    }
                }
            }
        case ATTACH_QUESTION : 
        return {
            ...state,
            [action.authedUser] : {
                ...state[action.authedUser],
                questions : [...state[action.authedUser].questions , action.qid]
            }
        }
        default:
            return state;
    }
}