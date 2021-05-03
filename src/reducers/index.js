import users from './users';
import questions from './questions';
import authedUser from './authedUser';
import { combineReducers } from 'redux';
import { loadingBarReducer } from 'react-redux-loading';

/**
 * exporting the object returned by combineReducers. 
 */

export default combineReducers({
    users,
    questions,
    authedUser,
    loadingBar: loadingBarReducer
});


