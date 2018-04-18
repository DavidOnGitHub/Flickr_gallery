import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Main from '../views/Main';

export const RootRoutes = () => (
  <Switch>
    <Route path="/" component={Main} />
  </Switch>
);
