import React, { Component } from 'react';
import './css/User.css';
class User extends Component {
    render() {
        const { objUser } = this.props;
        const answeredQuestions = Object.keys(objUser.answers).length;
        const questionsCreated = objUser.questions.length;
        return (
            <div className='user-card'>
                <div className='user-header'>
                    <img className='user-avatar' src={objUser.avatarURL} alt={`${objUser.name} avatar`} />
                </div>
                <div className="user-info">
                    <div className="user-name">
                        {objUser.name}
                    </div>
                    <div className="answered-questions">
                        <span>Answered Questions</span>
                        <span className="number">{answeredQuestions}</span>
                    </div>
                    <div className="questions-created">
                        <span>Created Questions</span>
                        <span className="number">{questionsCreated}</span>
                    </div>
                </div>
                <div className="user-score">
                    <div className="score-header">
                        Score
                    </div>
                    <div className="score-badge">
                        <div className="score-number">
                            {answeredQuestions + questionsCreated}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default User;