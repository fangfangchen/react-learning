import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Home from '../home';

class Auth extends React.Component {
  render() {
    return(
      <div>
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path={`/user/:userId(\\d+)`} component={Home} />
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default Auth;
