import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router';
import AnsweredQuestion from './AnsweredQuestion';
import Navbar from './Navbar';
import UnansweredQuestion from './UnansweredQuestion';

class ViewQuestion extends Component {
    render() {
        const { id, answers,questions } = this.props;
        if (questions[id]===undefined) {
            return(<Redirect to='/404' />)
        }
        if (answers[id] === undefined) {
            return (
                <div>
                    <Navbar page='dashboard' />
                    <UnansweredQuestion questionID={id} />
                </div>
            )
        }
        return (
            <div>
                <Navbar page='dashboard'  />
                <AnsweredQuestion questionID={id} />
            </div>
        )
    }
}
function mapStateToProps({ questions,users, authedUser }, props) {
    const { id } = props.match.params;
    const answers = users[authedUser].answers;
    return {
        id,
        answers,
        questions
    }
}
export default connect(mapStateToProps)(ViewQuestion);