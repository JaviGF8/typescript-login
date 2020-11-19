import React, { FC } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

import { INDEX_URL, DASHBOARD_URL, SETTINGS_URL } from '../../utils/paths';
import LandingPage from '../Landing';
import DashboardPage from '../Dashboard';
import SettingsPage from '../Settings';
import Navigator from '../../components/Navigator';

import { MainProps } from './types';

const Main: FC<MainProps> = ({ user }) => {
  const isLoggedIn = (): boolean => !!user?.name;
  return (
    <main>
      <Navigator user={user}>
        <Switch>
          <Route
            exact
            path={DASHBOARD_URL}
            render={() => isLoggedIn() ? <Route component={DashboardPage} /> : <Redirect to={INDEX_URL} />}
          />
          <Route
            exact
            path={SETTINGS_URL}
            render={() => isLoggedIn() ? <Route component={SettingsPage} /> : <Redirect to={INDEX_URL} />}
          />
          <Route
            path={INDEX_URL}
            render={() => isLoggedIn() ? <Redirect to={SETTINGS_URL} /> : <Route component={LandingPage} />}
          />
        </Switch>
      </Navigator>
    </main>
  );
};

export default Main;
