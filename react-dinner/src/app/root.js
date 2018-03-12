import React from 'react';
import { HashRouter as Router, Route, Switch, Link, Redirect } from 'react-router-dom';

import App from './App';
import Login from './page/login';
import AuthorizedRoute from './AuthorizedRoute';
import PrimaryLayout from './page/auth/PrimaryLayout';

class Root extends React.Component {
  render() {
    return (
      <Router>
        <div>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/login">Login</Link></li>
            <li><Link to={`/user/:userId(\\d+)`}>User</Link></li>
          </ul>
          <Switch>
            <Route path="/login" component={Login} />
            <AuthorizedRoute path="/" component={PrimaryLayout} />
            <Redirect to="/" />
          </Switch>
        </div>
      </Router>
    );
  }
};

export default Root;
