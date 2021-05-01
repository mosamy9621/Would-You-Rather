import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import './css/Question.css';
class Question extends Component {
    render() {
        const { question, user } = this.props;
        return (
            <div className="question-card">
                <div className="question-card-header">
                    <img className="question-avatar" src={user.avatarURL} alt={`${user.name} avatar`}></img>
                    <span className="author">{user.name} asks</span>
                </div>
                <div className="question-card-body">
                    <span className="question-header">Would you rather ... ?</span>
                    <span className="option">{question.optionOne.text}</span>
                    <span className="option">{question.optionTwo.text}</span>
                    <span className="btn">
                        <Link to={`/questions/${question.id}`} className="view-btn">View Poll</Link>
                    </span>
                </div>
            </div>
        )
    }
}
function mapStateToProps({ users, questions }, { questionID }) {
    const question = questions[questionID];
    return {
        user: users[question.author],
        question
    }
}
export default connect(mapStateToProps)(Question);
