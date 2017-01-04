import React from 'react';
import { Route, IndexRoute, browserHistory } from 'react-router';
import App from './components/app';
import MainPage from './components/mainpage';
import Wellcome from './components/wellcome';
import Signout from './components/signout';
import Signin from './components/signin';
import Signup from './components/signup';
import RequireAuth from './components/require_auth';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={Wellcome}
      title="Rockets Email"
      description="The Only Smart Web-Email On The Web"
      buttonIcon={<i className="fa fa-rocket" aria-hidden="true"></i>}
      buttonText="Get Started!"
      key="wellcome"
      onClickHandler={ () => browserHistory.push('/signup') }
      />
    <Route path="signin" component={Signin} />
    <Route path="main" component={RequireAuth(MainPage)} />
    <Route path="signout" component={Signout} />
    <Route path="signup" component={Signup} />
  </Route>
);
