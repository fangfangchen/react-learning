import React from 'react';
import { Route, Switch } from 'react-router-dom';

class AuthorizedRoute extends React.Component {
  render() {
    const { component: Component, ...reset } = this.props;
    return(
      <Route {...reset} render={(props) => (
        <Component {...props} />
      )} />
    );
  }
}

export default AuthorizedRoute;
