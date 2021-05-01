import React, { Component } from 'react';
import './css/Navbar.css';
import { connect } from 'react-redux';
import { setAuthedUser } from '../actions/authedUser';
import { Link } from 'react-router-dom';
class Navbar extends Component {
    logout = () => {
        const { dispatch } = this.props;
        dispatch(setAuthedUser(null));
    }
    render() {

        const { objUser, page } = this.props;
        return (
            <header className="header">
                <ul className="page-list">
                    <li className="page-item" >
                        <Link to='/' className={page === 'dashboard' ? "page active-page" : "page"}>
                            Dashboard
                        </Link>
                    </li>
                    <li className="page-item">
                        <Link to='/add' className={page === 'newQuestion' ? "page active-page" : "page"}>
                            New Question
                        </Link>
                    </li>
                    <li className="page-item">
                        <Link to='/leaderboard' className={page === 'leaderboard' ? "page active-page" : "page"}>
                            Leaderboard
                        </Link>
                    </li>
                </ul>
                    <div className="logged-in">
                        <img src={objUser.avatarURL} alt={`${objUser.name} avatar`} className="avatar"></img>
                        <h5 className="username">Welcome {objUser.name}</h5>
                        <Link to='/' className="logout-btn" onClick={this.logout}>Logout</Link>
                    </div>
            </header>
        )
    }
}
function mapStateToProps({ authedUser, users }) {
    return {
        objUser: users[authedUser]
    }
}
export default connect(mapStateToProps)(Navbar);