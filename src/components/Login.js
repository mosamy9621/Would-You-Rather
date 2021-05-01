import React, { Component } from 'react';
import './css/Login.css';
import { connect } from 'react-redux';
import { setAuthedUser } from '../actions/authedUser';
import { Redirect } from 'react-router';

class Login extends Component {
    state = {
        selectedUser: '',
        loggedIn: false
    }
    handleChange = (evt) => {
        const value = evt.target.value;
        this.setState({ selectedUser: value });
    }
    handleSubmit = (evt) => {
        evt.preventDefault();
        const { selectedUser } = this.state;
        const { dispatch } = this.props;
        dispatch(setAuthedUser(selectedUser));
        this.setState({ loggedIn: true });
    }
    render() {
        const { redirect, users } = this.props
        const { selectedUser, loggedIn } = this.state;
        if (Object.keys(users).length === 0) {
            return null
        }
        if (loggedIn === true) {

            return (<Redirect to={redirect} />);
        }
        return (
            <div className="container">
                <div className="card center-card">
                    <div className="card-header">
                        <span>Please Select User to login</span>
                    </div>
                    <div className="card-body">
                        <form className="login-form" onSubmit={this.handleSubmit}>
                            <label className="select-label" >Select User</label>
                            <select className="login-select" value={selectedUser} onChange={this.handleChange}>
                                <option value=''>Select User</option>
                                {Object.keys(users).map(strID => {
                                    return (
                                        <option key={strID} value={strID}>{users[strID].name}</option>
                                    )
                                })
                                }
                            </select>
                            <button type="submit" disabled={selectedUser === ''} className={selectedUser === '' ? "disabled-btn" : "login-btn"}>Login</button>
                        </form>

                    </div>
                </div>
            </div>
        )
    }
}
function mapStateToProps({ users }, { redirect }) {
    return {
        users,
        redirect
    }
}
export default connect(mapStateToProps)(Login);