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
function mapStateToProps({ authedUser }) {
    return {
        authedUser
    }
}
export default connect(mapStateToProps)(PrivateRouter);