import {  receiveQuestions, saveAnswer,addQuestion } from "./questions"
import {  receiveUsers,addAnswer, attachQuestion } from "./users"
import {getInitiallData,saveQuestionAnswer,saveQuestion} from '../utils/API';
import { showLoading, hideLoading } from 'react-redux-loading';

/**
 * @description This is high order function that returns another function to deal with the api calls which get the initial data.
 * @returns function(dispatch)
 */
export function handleInitialData() {
    return (dispatch) => {
        dispatch(showLoading());
        return getInitiallData().then(({users,questions})=>{
            dispatch(receiveUsers(users));
            dispatch(receiveQuestions(questions));
            dispatch(hideLoading());
        });
    }
}
/**
 * @description This is high order function that returns another function to deal with the api calls which save the answer of specific quesiton.
 * @returns function(dispatch)
 */
export function handleSaveAnswer(authedUser, qid, answer){
    return (dispatch) =>{
        dispatch(showLoading());
        return saveQuestionAnswer({authedUser,qid,answer}).then(()=>{
            dispatch(saveAnswer(authedUser,qid,answer));
            dispatch(addAnswer(authedUser,qid,answer));
            dispatch(hideLoading());
        });
    }
}
/**
 * @description This is high order function that returns another function to deal with the api calls which add new question.
 * @returns function(dispatch)
 */
export function handleAddQuestion(question) {
    return (dispatch)=>{
        dispatch(showLoading());
        return saveQuestion(question).then((respQuestion)=>{
            dispatch(addQuestion(respQuestion));
            dispatch(attachQuestion(respQuestion.author,respQuestion.id));
            dispatch(hideLoading());
        })
    }

}