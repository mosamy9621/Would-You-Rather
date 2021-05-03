import React, { Component } from 'react';
import Navbar from './Navbar'
import { connect } from 'react-redux';
import QuestionList from './QuestionList';
import './css/Dashboard.css';
class Dashboard extends Component {
    state = {
        selectedTab: "unanswered"
    }
    changeTab = (selectedTab) => {
        this.setState({ selectedTab });
    }
    render() {
        const { unansweredQuestions, answeredQuestions } = this.props;
        const { selectedTab } = this.state;
        const questionList = selectedTab === 'unanswered' ? unansweredQuestions : answeredQuestions;
        return (
            <div>
                <Navbar page='dashboard' />
                <div className="container">
                    <div className="btn-group">
                        <button className={selectedTab === 'unanswered' ? "tab-btn tab-active" : "tab-btn"} onClick={() => { this.changeTab('unanswered') }}>Unanswered Questions</button>
                        <button className={selectedTab === 'answered' ? "tab-btn tab-active" : "tab-btn"} onClick={() => { this.changeTab('answered') }}>Answered Questions</button>
                    </div>
                    <QuestionList questions={questionList} />
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
function mapStateToProps({ questions, users, authedUser }) {
    const answers = users[authedUser].answers;
    const unansweredQuestions = Object.keys(questions).filter(strID => {
        return answers[strID] === undefined;
    }).sort((a, b) => questions[b].timestamp - questions[a].timestamp);
    const answeredQuestions = Object.keys(questions).filter(strID => {
        return answers[strID] !== undefined;
    }).sort((a, b) => questions[b].timestamp - questions[a].timestamp);
    return {
        unansweredQuestions,
        answeredQuestions
    }
}
export default connect(mapStateToProps)(Dashboard);