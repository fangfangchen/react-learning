import React from 'react';
import { Provider } from 'react-redux';
import { HashRouter as Router, Route, Switch, Link, Redirect } from 'react-router-dom';

import store from './store';
import App from './App';
import Login from './page/login';
import AuthorizedRoute from './AuthorizedRoute';
import PrimaryLayout from './page/auth/PrimaryLayout';

class Root extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          {/*<ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/login">Login</Link></li>
            <li><Link to={`/user/:userId(\\d+)`}>User</Link></li>
          </ul>*/}
          <Switch>
            <Route path="/login" component={Login} />
            <AuthorizedRoute path="/" component={PrimaryLayout} />
            <Redirect to="/" />
          </Switch>
        </Router>
      </Provider>
    );
  }
};

export default Root;
