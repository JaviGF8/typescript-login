import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { FC } from 'react';

import { LoadingProps } from './types';
import './index.scss';

const Loading: FC<LoadingProps> = ({ color }) => (
  <FontAwesomeIcon className={`loading ${color}`} icon={faSpinner} />
);

export default Loading;
