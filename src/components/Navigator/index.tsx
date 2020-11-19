import React, { FC, useState } from 'react';

import { useDispatch } from 'react-redux';

import NavigatorButton from './NavigatorButton';
import NavigatorUser from './NavigatorUser';
import { NavigatorProps } from './types';
import './index.scss';
import { DASHBOARD_URL, INDEX_URL, SETTINGS_URL } from '../../utils/paths';
import Button from '../base/Button';
import { USER } from '../../utils/dispatchTypes';
import { faCog, faSignOutAlt, faTachometerAlt } from '@fortawesome/free-solid-svg-icons';

const Navigator: FC<NavigatorProps> = ({ children, user }) => {
  const [ expanded, setExpanded ] = useState(false);
  const dispatch = useDispatch();

  const logout = () => {
    dispatch({ type: USER.SET });
    setExpanded(false);
  };

  return !!user?.name ? (
    <div className="navigator">
      <div className="navigator-topbar">
        <Button className="expand-btn" onClick={() => setExpanded(!expanded)} type="button">
          <div />
          <div />
          <div />
        </Button>
        <h1>dashboard</h1>
        <NavigatorUser name={user?.name} role={user?.role} />
      </div>
      <div className="navigator-content">
        <div className={`navigator-sidebar${expanded ? ' expanded shadow' : ''}`}>
          <NavigatorButton icon={faCog} title="Settings" onClick={() => setExpanded(false)} to={SETTINGS_URL} />
          <NavigatorButton icon={faTachometerAlt} title="Dashboard" onClick={() => setExpanded(false)} to={DASHBOARD_URL} />
          <NavigatorButton icon={faSignOutAlt} title="Logout" onClick={logout} to={INDEX_URL} />
        </div>
        <div className="navigator-children">{children}</div>
      </div>
    </div>
  ) : (
    <>{children}</>
  );
};

export default Navigator;
