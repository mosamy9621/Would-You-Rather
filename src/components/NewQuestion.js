import React, { Component } from 'react';
import Navbar from './Navbar';
import './css/NewQuestion.css';
import { connect } from 'react-redux';
import { handleAddQuestion } from '../actions/shared';
import { Redirect } from 'react-router';
class NewQuestion extends Component {
    state = {
        optionOne: '',
        optionTwo: '',
        toHome: false
    }
    handleSubmit = (evt) => {
        evt.preventDefault();
        const { dispatch, authedUser } = this.props;
        const { optionOne, optionTwo } = this.state;
        const question = { optionOneText: optionOne, optionTwoText: optionTwo, author: authedUser };
        dispatch(handleAddQuestion(question)).then(() => {
            this.setState({ optionOne: '', optionTwo: '',toHome:true });
        })
    }
    handleChange = (evt) => {
        const id = evt.target.id;
        const value = evt.target.value;
        if (id === 'option1') {
            this.setState({ optionOne: value });
            return;
        }
        this.setState({ optionTwo: value });
    }
    render() {
        const { optionOne, optionTwo, toHome } = this.state;
        if (toHome === true) {
            return (<Redirect to='/' />);
        }
        return (
            <div>
                <Navbar page='newQuestion' />
                <div className="container">
                    <div className="card center-card">
                        <div className="card-header">
                            <span>Create New Question</span>
                        </div>
                        <div className="card-body">
                            <form className="question-form" onSubmit={this.handleSubmit}>
                                <div className="question-form-header">
                                    Would you rather ...
                            </div>
                                <div className="question-form-body">
                                    <input className="input-option" id="option1" type="text" value={optionOne} placeholder="Option One" onChange={this.handleChange} />
                                    <div className="OR">OR</div>
                                    <input className="input-option" id="option2" type="text" value={optionTwo} placeholder="Option Two" onChange={this.handleChange} />
                                </div>
                                <button type="submit" disabled={optionOne === '' || optionTwo === ''} className={optionOne === '' || optionTwo === '' ? "disabled-submit-btn" : "submit-btn"}>Submit</button>
                            </form>

                        </div>
                    </div>
                </div>
            </div>
        )
    }

}
/**
 * @description This function is responsible for getting state pieces that needed by this component and pass it to this component as its props.
 * @param {object} param0 
 * @returns {object}
 */
function mapStateToProps({ authedUser }) {
    return {
        authedUser
    }
}
export default connect(mapStateToProps)(NewQuestion);