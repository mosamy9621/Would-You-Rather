
export const RECEIVE_QUESTIONS = 'RECEIVE_QUESTIONS';
export const SAVE_ANSWER = 'SAVE_ANSWER';
export const ADD_QUESTION = 'ADD_QUESTION';
/**
 * @description This is action creator function and responsible for creating action that recieve questions and save to the store. 
 * @param {object} questions 
 * @returns {object} action object that recieve questions.
 */
export function receiveQuestions(questions) {
    return {
        type: RECEIVE_QUESTIONS,
        questions
    }
}

/**
 * @description This is action creator function and responsible for creating action that save answer to specific question.
 * @param {string} authedUser 
 * @param {string} qid 
 * @param {string} answer 
 * @returns {object} action object that save answer.
 */
export function saveAnswer(authedUser, qid, answer) {
    return {
        type: SAVE_ANSWER,
        authedUser,
        qid,
        answer,
    }
}

/**
 * @description This action creator function and responsible for creating action that add new question.
 * @param {object} question 
 * @returns {object} action object that add new question.
 */
 export function addQuestion(question) {
    return {
        type: ADD_QUESTION,
        question
    }
}
