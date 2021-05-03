import React, { Component } from 'react';
import { connect } from 'react-redux';
import {handleSaveAnswer} from '../actions/shared';
import './css/Unanswered.css';

class UnansweredQuestion extends Component {
    state = {
        chosenAnswer: 'optionOne',
        
    }
    handleChange = (evt) => {
        let value = 'optionOne';
        if (evt.target.id === 'option2') {
            value='optionTwo';
        }
        this.setState({ chosenAnswer: value });
    }
    handleSubmit = (evt)=>{
        evt.preventDefault();
        const {chosenAnswer} = this.state;
        const {dispatch , question, user} = this.props;
        dispatch(handleSaveAnswer(user.id,question.id,chosenAnswer));
    }
    render() {
        const { chosenAnswer } = this.state;
        const { question, author } = this.props;
        const optionOne = question.optionOne.text;
        const optionTwo = question.optionTwo.text;
        return (
            <div className="container">
                <div className="question-card">
                    <div className="question-card-header">
                        <img className="question-avatar" src={author.avatarURL} alt={`${author.name} avatar`}></img>
                        <span className="author">Asked by {author.name}</span>
                    </div>
                    <div className="question-card-body">
                        <form>
                            <div className="question-title">Would you rather ...</div>
                            <div className="option radio-group">
                                <input className="radio" type="radio" name="answer" id="option1" value={chosenAnswer} onChange={this.handleChange} checked={chosenAnswer === 'optionOne'} />
                                <label className="radio-label" htmlFor="option1">{optionOne}</label>
                            </div>
                            <div className="option radio-group">
                                <input className="radio" type="radio" name="answer" id="option2" value={chosenAnswer} onChange={this.handleChange} checked={chosenAnswer === 'optionTwo'} />
                                <label className="radio-label" htmlFor="option2">{optionTwo}</label>
                            </div>
                            <span className="btn">
                                <button className="submit-btn" onClick={this.handleSubmit}>Submit</button>
                            </span>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}
/**
 * @description This function is responsible for getting state pieces that needed by this component and pass it to this component as its props.
 * @param {object} param0 
 * @param {object} param1 
 * @returns {object}
 */
function mapStateToProps({ users, questions, authedUser }, { questionID }) {
    const question = questions[questionID];
    return {
        author: users[question.author],
        question,
        user: users[authedUser]
    }
}
export default connect(mapStateToProps)(UnansweredQuestion);