import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './components/app';
import MainPage from './containers/mainpage';
import FrontPage from './containers/frontpage';


export default (
  <Route path="/" component={App}>
    <IndexRoute component={FrontPage} />
    <Route path="main" component={MainPage} />
  </Route>
);
