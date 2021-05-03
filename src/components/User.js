import './css/User.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAward } from '@fortawesome/free-solid-svg-icons';
 /**
  * @description stateless component function that responsible for creating user component.
  * @param {object} props 
  * @returns JSX describing the component view. 
  */
function User(props) {
    const { index, objUser } = props;
    const answeredQuestions = Object.keys(objUser.answers).length;
    const questionsCreated = objUser.questions.length;
    return (
        <div className='user-card'>
            <div className='user-header'>
                <img className='user-avatar' src={objUser.avatarURL} alt={`${objUser.name} avatar`} />
                <div className="ribbon" id={`user-${index}`}>
                    <FontAwesomeIcon icon={faAward} />
                </div>
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
export default User;