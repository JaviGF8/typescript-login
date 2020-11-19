import React, { FC } from 'react';

import { NavigatorUserProps } from './types';
import './index.scss';

const NavigatorUser: FC<NavigatorUserProps> = ({ name, role }) => (
  <div className="user-info">
    <strong>{name}</strong>
    <span>{role}</span>
  </div>
);

export default NavigatorUser;
