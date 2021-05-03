import React, { Component } from 'react';
import { Redirect, Route } from 'react-router';
import { connect } from 'react-redux';

class PrivateRouter extends Component {
    render() {
        const { authedUser, path, exact, component } = this.props;
        if (authedUser === null) {
            return (<Redirect to={{
                pathname: '/login',
                state : {
                    path : window.location.pathname
                }
            }} />)
        }
        return (
            <Route path={path} exact={exact} component={component} />
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
export default connect(mapStateToProps)(PrivateRouter);