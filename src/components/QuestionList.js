import Question from './Question';

function QuestionList(props) {
    const { questions } = props;
    if (questions.length === 0) {
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

export default QuestionList;