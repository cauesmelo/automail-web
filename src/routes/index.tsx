import React from 'react';

import { Switch } from 'react-router-dom';

import Route from './Route';

import Home from '../pages/Home';
import Dashboard from '../pages/Dashboard';
// import Profile from '../pages/Profile';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={Home} />

    <Route path="/dashboard" exact component={Dashboard} isPrivate />
    {/* <Route path="/profile" exact component={Profile} isPrivate /> */}
  </Switch>
);

export default Routes;
