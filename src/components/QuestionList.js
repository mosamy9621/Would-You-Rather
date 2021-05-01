import React, { Component } from 'react';
import Question from './Question';

class QuestionList extends Component {
    render() {
        const { questions } = this.props;
        if (questions.length === 0 ) {
            return (
            <div className="container alert empty-alert">
                    No data to preview.
            </div>
            )
        }
        return (
          
            <ul className="question-list">
                {questions.map(strID => (
                    <li key={strID}>
                        <Question questionID={strID} />
                    </li>
                ))
                }
            </ul>
        
        )
    }
}
export default QuestionList;