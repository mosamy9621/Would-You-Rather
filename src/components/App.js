import './css/App.css';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { handleInitialData } from '../actions/shared';
import Login from './Login';
import LoadingBar from 'react-redux-loading';
import { Route, Switch } from 'react-router';
import PrivateRouter from './PrivateRouter';
import Dashboard from './Dashboard';
import ViewQuestion from './ViewQuestion';
import PageNotFound from './PageNotFound';
import Leaderboard from './Leaderboard';
import NewQuestion from './NewQuestion';

class App extends Component {
  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(handleInitialData());
  }
  render() {
    return (
      <Route>
        <LoadingBar />
        <Switch>
          <Route path='/login' render={(props) => {
            if (props.location.state === undefined) {
              props.location.state = {};
              props.location.state.path = '/';
            }
            return <Login redirect={props.location.state.path} />
          }} />
          <PrivateRouter exact={true} path="/" component={Dashboard} />
          <PrivateRouter exact={false} path="/questions/:id" component={ViewQuestion} />
          <PrivateRouter exact={false} path='/404' component={PageNotFound} />
          <PrivateRouter exact={true} path='/leaderboard' component={Leaderboard} />
          <PrivateRouter exact={true} path='/add' component={NewQuestion} />
          <PrivateRouter exact={false} to='/' component={PageNotFound} />
        </Switch>
      </Route>
    );
  }
}

export default connect()(App);
