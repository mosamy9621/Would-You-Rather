import React, { Component } from 'react';
import { connect } from 'react-redux';
import './css/Answered.css';
class AnsweredQuestion extends Component {
    render() {
        const { question, user, author } = this.props;
        const optionOneCount = question.optionOne.votes.length;
        const optionTwoCount = question.optionTwo.votes.length;
        const totalVotes = optionOneCount + optionTwoCount;
        const optionOnePrecentage = optionOneCount / totalVotes * 100;
        const optionTwoPrecentage = optionTwoCount / totalVotes * 100;
        const answer = user.answers[question.id];
        return (
            <div className="container">
                <div className="question-card">
                    <div className="question-card-header">
                        <img className="question-avatar" src={author.avatarURL} alt={`${author.name} avatar`}></img>
                        <span className="author">Asked by {author.name}</span>
                    </div>
                    <div className="question-card-body">
                        <span className="answer-title">Results</span>
                        <div className={answer === 'optionOne' ? "answer chosen-answer" : "answer"}>
                            <div className="answer-header">
                                Would you rather {question.optionOne.text}  ?
                            </div>
                            <div className="answer-progress">
                                <div className="answer-bar" style={{ width: `${optionOnePrecentage}%` }}>
                                    <span className="answer-precentage">{optionOnePrecentage.toFixed(0)}%</span>
                                </div>
                            </div>
                            <div className="answer-number"> {optionOneCount} out of {totalVotes} Votes </div>
                        </div>
                        <div className={answer === 'optionTwo' ? "answer chosen-answer" : "answer"}>
                            <div className="answer-header">
                                Would you rather {question.optionTwo.text}  ?
                            </div>
                            <div className="answer-progress">
                                <div className="answer-bar" style={{ width: `${optionTwoPrecentage}%` }}>
                                    <span className="answer-precentage">{optionTwoPrecentage.toFixed(0)}%</span>
                                </div>
                            </div>
                            <div className="answer-number"> {optionTwoCount} out of {totalVotes} Votes </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
function mapStateToProps({ users, questions, authedUser }, { questionID }) {
    const question = questions[questionID];
    return {
        author: users[question.author],
        question,
        user: users[authedUser]
    }
}
export default connect(mapStateToProps)(AnsweredQuestion);