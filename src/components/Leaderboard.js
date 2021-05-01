import React, { Component } from 'react';
import Navbar from './Navbar';
import User from './User';
import { connect } from 'react-redux';
class Leaderboard extends Component {
    render() {
        const { arrUsers } = this.props;
        console.log(arrUsers);
        return (
            <div>
                <Navbar page='leaderboard' />
                <div className='container'>
                    <ul>
                        {arrUsers.map(objUser => (
                            <li key={objUser.id} >
                                <User objUser={objUser} />
                            </li>
                        ))
                        }
                    </ul>
                </div>
            </div>
        )
    }
}
function mapStateToProps({ users }) {
    const arrUsers = Object.keys(users).map(strKey => {
        const obj = { ...users[strKey] };
        return obj;
    })

    return {
        arrUsers: arrUsers.sort((a, b) => {
            const aScore = Object.keys(a.answers).length + a.questions.length;
            const bScore = Object.keys(b.answers).length + b.questions.length;
            return bScore-aScore;
        })
    }
}
export default connect(mapStateToProps)(Leaderboard);