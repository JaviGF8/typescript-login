import React, { FC } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { ButtonProps } from './types';
import Loading from '../Loading';

import './index.scss';

const Button: FC<ButtonProps> = ({
  children,
  className,
  color = 'primary',
  disabled,
  icon,
  inverted,
  loading,
  loadingColor = 'white',
  onClick,
  text,
  type,
}) => (
  <button
    className={`${className ? `${className} ` : ''}custom-btn btn-${color}${inverted ? ` btn-${color}-inverted` : ''}`}
    disabled={disabled}
    onClick={onClick}
    type={type}
  >
    {icon && <FontAwesomeIcon icon={icon} />}
    {text}
    {children}
    {loading && <Loading color={loadingColor} />}
  </button>
);

export default Button;
