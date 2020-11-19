import React, { FC } from 'react';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { NavigatorButtonProps } from './types';
import './index.scss';

const NavigatorButton: FC<NavigatorButtonProps> = ({ icon, onClick, title, to }) => (
  <NavLink className="navigator-btn" activeClassName="selected-btn" exact onClick={onClick} to={to}>
    {icon && <FontAwesomeIcon icon={icon} />} {title}
  </NavLink>
);

export default NavigatorButton;
