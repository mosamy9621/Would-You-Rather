import Question from './Question';
/**
 * @descirption stateless component function that is responsible for creating question list component.
 * @param {object} props 
 * @returns JSX describing the component view. 
 */
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