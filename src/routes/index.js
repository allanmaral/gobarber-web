import React from 'react';
import { Switch, Route as DefaultRoute } from 'react-router-dom';
import Route from './Route';

import Dashboard from '../pages/Dashboard';
import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';
import Profile from '../pages/Profile';

export default function Routes() {
  return (
    <Switch>
      <DefaultRoute
        path="/"
        render={({ location }) => {
          return (
            <Switch location={location}>
              <Route
                path="/"
                exact
                component={SignIn}
                transitionKey={location.key}
              />
              <Route
                path="/signup"
                component={SignUp}
                transitionKey={location.key}
              />
              <Route
                path="/dashboard"
                isPrivate
                component={Dashboard}
                transitionKey={location.key}
              />
              <Route
                path="/profile"
                isPrivate
                component={Profile}
                transitionKey={location.key}
              />
            </Switch>
          );
        }}
      />

      <Route path="/" component={() => <h1>Erro 404</h1>} />
    </Switch>
  );
}
