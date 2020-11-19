import React, { FC } from 'react';

import { SettingElementProps } from './types';

const SettingElement: FC<SettingElementProps> = ({ value, label }) => (
  <div className="setting-element">
    {label}: <strong>{value}</strong>
  </div>
);

export default SettingElement;
