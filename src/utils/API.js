import {_getQuestions,_getUsers,_saveQuestion,_saveQuestionAnswer} from './_DATA';
export function getInitiallData() {
    return Promise.all([_getUsers(),_getQuestions()]
    ).then(([objUsers,objQuestions])=>{
        return {
            users : objUsers,
            questions : objQuestions
        }
    })
}

export function saveQuestion (question){
    return _saveQuestion(question);
}
export function saveQuestionAnswer({authedUser ,qid, answer}) {
    return _saveQuestionAnswer({authedUser,qid,answer});
}
